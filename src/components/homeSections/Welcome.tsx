import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowRight } from 'react-icons/fa';

const Welcome = () => {
  const router = useRouter();

  return (
    <Box flexBasis={['100%', '100%', '50%']}>
      <Heading
        as="h1"
        bgGradient="linear(to-br, cyan.500, blue.900)"
        bgClip="text"
        fontSize={['4xl', '5xl', '6xl']}
        marginBottom={4}
      >
        Selamat Datang di Web Sistem Pakar Gamma-5
      </Heading>

      <Text>Temukan Jurusan Kuliah yang Sesuai Dengan Kepribadianmu!</Text>

      <Button
        color="white"
        borderRadius="full"
        marginY={8}
        bgGradient="linear(to-br, cyan.500, blue.900)"
        rightIcon={<FaArrowRight />}
        onClick={() => router.push('/test')}
        _hover={{
          bgGradient: 'linear(to-br, cyan.600, blue.900)',
        }}
        _active={{
          bgGradient: 'linear(to-br, cyan.600, blue.900)',
        }}
      >
        Tes Sekarang
      </Button>
    </Box>
  );
};

export default Welcome;
