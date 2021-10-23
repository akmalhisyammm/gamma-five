import { Box, Button, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaArrowRight } from 'react-icons/fa';

import Layout from 'components/layout';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout title="Beranda">
      <Box textAlign="center">
        <Heading
          as="h1"
          bgGradient="linear(to-r, teal.500, green.500)"
          bgClip="text"
          fontSize={['5xl', '6xl']}
          marginBottom={4}
        >
          Selamat Datang di Web Sistem Pakar Gamma-5
        </Heading>

        <Text>Temukan Jurusan Kuliah yang Sesuai Dengan Kepribadianmu!</Text>

        <Button
          color="white"
          borderRadius="full"
          marginY={8}
          bgGradient="linear(to-r, teal.400, green.400)"
          rightIcon={<FaArrowRight />}
          onClick={() => router.push('/konsultasi')}
          _hover={{
            bgGradient: 'linear(to-r, teal.500, green.500)',
          }}
          _active={{
            bgGradient: 'linear(to-r, teal.600, green.600)',
          }}
        >
          Konsultasi Sekarang
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
