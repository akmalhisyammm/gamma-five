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
import { useState } from 'react';
import type { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'lib/firebase';
import { Characteristic } from 'types/characteristic';
import { Personality } from 'types/personality';
import { Inferred, RadioInput, Rule } from 'types/inference';
import { infer } from 'utils/infer';
import { baseUrl } from 'constants/baseUrl';
import { TestForm, TestResult } from 'components/test';
import Layout from 'components/layout';

type TestProps = {
  personalities: Personality[];
  characteristics: Characteristic[];
  rules: Rule[];
};

const Test = ({ personalities, characteristics, rules }: TestProps) => {
  const router = useRouter();
  const backgroundColor = useColorModeValue('gray.50', 'gray.800');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [result, setResult] = useState<Inferred>();

  const handleInferData = async (data: RadioInput) => {
    const res = await infer(data, personalities, rules);

    setResult(res);
    onOpen();
  };

  return (
    <Layout>
      <NextSeo
        title="Test"
        canonical={`${baseUrl}/test`}
        openGraph={{
          title: 'Test | Gamma-5',
          description: 'Test page of Gamma-5',
        }}
      />

      <Heading textAlign="center">Tes Penjurusan</Heading>
      <hr
        style={{
          borderBottom: '2px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />
      <TestForm characteristics={characteristics} inferData={handleInferData} />

      {result && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          scrollBehavior="inside"
          size="2xl"
          closeOnOverlayClick={false}
          isCentered>
          <ModalOverlay />
          <ModalContent marginX={4}>
            <ModalHeader backgroundColor={backgroundColor} borderBottom="1px solid">
              Hasil Tes
            </ModalHeader>

            <ModalBody>
              <TestResult result={result} />
            </ModalBody>

            <ModalFooter
              justifyContent="flex-start"
              backgroundColor={backgroundColor}
              borderTop="1px solid">
              <Button
                colorScheme="blue"
                mr={3}
                leftIcon={<FaArrowLeft />}
                onClick={() => {
                  onClose();
                  router.push('/');
                }}>
                Kembali ke Beranda
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const db = getFirestore(firebaseApp);

  const personalitiesData: Personality[] = [];
  const characteristicsData: Characteristic[] = [];
  const rulesData: Rule[] = [];

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

  return {
    props: {
      personalities: personalitiesData,
      characteristics: characteristicsData,
      rules: rulesData,
    },
  };
};

export default Test;
