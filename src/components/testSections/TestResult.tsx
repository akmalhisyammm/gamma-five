import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Inferred } from 'models';
import { FaCheckCircle } from 'react-icons/fa';

interface TestResultProps {
  result: Inferred;
}

const TestResult = ({ result }: TestResultProps) => {
  const backgroundColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <>
      <Box
        marginTop={2}
        marginBottom={4}
        padding={4}
        border="1px solid"
        borderRadius={8}
        backgroundColor={backgroundColor}
      >
        <Heading fontSize="2xl" marginBottom={2}>
          Tipe Kepribadian
        </Heading>
        <hr style={{ margin: '12px 0' }} />
        <Text>{result.personality.name}</Text>
      </Box>

      <Box
        marginTop={2}
        marginBottom={4}
        padding={4}
        border="1px solid"
        borderRadius={8}
        backgroundColor={backgroundColor}
      >
        <Heading fontSize="2xl" marginBottom={2}>
          Probabilitas
        </Heading>
        <hr style={{ margin: '12px 0' }} />
        <Text>{(result.probability * 100).toFixed(2)} %</Text>
      </Box>

      <Box
        marginTop={2}
        marginBottom={4}
        padding={4}
        border="1px solid"
        borderRadius={8}
        backgroundColor={backgroundColor}
      >
        <Heading fontSize="2xl" marginBottom={2}>
          Deskripsi
        </Heading>
        <hr style={{ margin: '12px 0' }} />
        <Text>{result.personality.description}</Text>
      </Box>

      <Box
        marginTop={2}
        marginBottom={4}
        padding={4}
        border="1px solid"
        borderRadius={8}
        backgroundColor={backgroundColor}
      >
        <Heading fontSize="2xl" marginBottom={2}>
          Rekomendasi Jurusan
        </Heading>
        <hr style={{ margin: '12px 0' }} />
        <List spacing={3}>
          {result.personality.majors.map((major, idx) => (
            <ListItem key={idx}>
              <ListIcon as={FaCheckCircle} color="blue.500" />
              {major}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default TestResult;
