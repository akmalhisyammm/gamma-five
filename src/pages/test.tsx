import {
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Characteristic,
  Inferred,
  Input,
  Personality,
  RadioInput,
  Rule,
  UserCertaintyFactor,
} from 'models';
import { infer } from 'utils/infer';
import { firebaseApp } from 'config/firebase-config';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { TestForm, TestResult } from 'components/testSections';
import Layout from 'components/layout';
import { FaArrowLeft } from 'react-icons/fa';

type Props = {
  personalities: Personality[];
  characteristics: Characteristic[];
  rules: Rule[];
};

const Test = ({ personalities, characteristics, rules }: Props) => {
  const [result, setResult] = useState<Inferred>();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue('gray.50', 'gray.800');
  const router = useRouter();

  const inferDataHandler = async (data: RadioInput) => {
    const modifiedInput: UserCertaintyFactor[] = [];

    for (let [key, value] of Object.entries(data)) {
      modifiedInput.push({
        characteristic_id: key,
        weight: parseFloat(value),
      });
    }

    const processedInput: Input[] = [];
    let tempCharacteristics = [];
    for (const rule of rules) {
      for (const characteristic of rule.characteristics) {
        for (const input of modifiedInput) {
          if (characteristic.characteristic_id === input.characteristic_id)
            tempCharacteristics.push(input);
        }
      }
      processedInput.push({
        personality_id: rule.personality_id,
        characteristics: tempCharacteristics,
      });
      tempCharacteristics = [];
    }

    const inferResult: Inferred[] = [];

    for (const input of processedInput) {
      const currentPersonality = personalities.find(
        (personality) => personality.id === input.personality_id
      );
      const currentRule = rules.find(
        (rule) => rule.personality_id === input.personality_id
      );

      if (!currentPersonality || !currentRule) return;

      const result = await infer(input, currentPersonality, currentRule);
      inferResult.push(result);
    }

    const highestInferProb = Math.max.apply(
      Math,
      inferResult.map((res) => res.probability)
    );

    const finalResult = inferResult.find(
      (res) => res.probability == highestInferProb
    );

    setResult(finalResult);
    onOpen();
  };

  return (
    <Layout title="Tes Penjurusan">
      <Heading textAlign="center">Tes Penjurusan</Heading>
      <hr
        style={{
          borderBottom: '2px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />

      <TestForm
        characteristics={characteristics}
        inferData={inferDataHandler}
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
        size="2xl"
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent marginX={4}>
          <ModalHeader
            backgroundColor={backgroundColor}
            borderBottom="1px solid"
          >
            Hasil Tes
          </ModalHeader>

          <ModalBody>
            <TestResult result={result!} />
          </ModalBody>

          <ModalFooter
            justifyContent="flex-start"
            backgroundColor={backgroundColor}
            borderTop="1px solid"
          >
            <Button
              colorScheme="blue"
              mr={3}
              leftIcon={<FaArrowLeft />}
              onClick={() => {
                onClose();
                router.push('/');
              }}
            >
              Kembali ke Beranda
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const db = getFirestore(firebaseApp);

  const personalitiesData: Personality[] = [];
  const characteristicsData: Characteristic[] = [];
  const rulesData: Rule[] = [];

  try {
    const personalitiesCollectionRef = collection(db, 'personalities');
    const characteristicsCollectionRef = collection(db, 'characteristics');
    const rulesCollectionRef = collection(db, 'rules');

    const personalities = await getDocs(personalitiesCollectionRef);
    personalities.docs.map((doc) =>
      personalitiesData.push({
        ...(doc.data() as Personality),
        id: doc.id,
      })
    );

    const characteristics = await getDocs(characteristicsCollectionRef);
    characteristics.docs.map((doc) =>
      characteristicsData.push({
        ...(doc.data() as Characteristic),
        id: doc.id,
      })
    );

    const rules = await getDocs(rulesCollectionRef);
    rules.docs.map((doc) =>
      rulesData.push({
        ...(doc.data() as Rule),
        id: doc.id,
      })
    );
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      personalities: personalitiesData,
      characteristics: characteristicsData,
      rules: rulesData,
    },
  };
};

export default Test;
