import {
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Characteristic,
  Inferred,
  Input,
  RadioInput,
  Rule,
  UserCertaintyFactor,
} from 'models';
import { getCharacteristics, getRules } from 'services/firebase';
import { infer } from 'utils/infer';
import { TestForm, TestResult } from 'components/testSections';
import Layout from 'components/layout';
import Loading from 'components/Loading';

const Test: NextPage = () => {
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([]);
  const [rules, setRules] = useState<Rule[]>([]);
  const [result, setResult] = useState<Inferred>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchData, setIsFetchData] = useState<boolean>(true);

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue('gray.50', 'gray.800');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const characteristics = await getCharacteristics();
        const rules = await getRules();
        setCharacteristics(characteristics);
        setRules(rules);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };

    fetchData();
    setIsFetchData(false);
  }, [isFetchData]);

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
      const result = await infer(input);
      if (result) inferResult.push(result);
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
          border: '1px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <TestForm
          characteristics={characteristics}
          inferData={inferDataHandler}
        />
      )}

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

          <ModalFooter backgroundColor={backgroundColor} borderTop="1px solid">
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setIsFetchData(true);
                router.replace(router.asPath);
              }}
            >
              Tes Lagi
            </Button>
            <Button
              colorScheme="teal"
              mr={3}
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

export default Test;
