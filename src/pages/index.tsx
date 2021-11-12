import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

import Layout from 'components/layout';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout title="Beranda">
      <Box textAlign={['center', 'center', 'left']}>
        <Flex wrap="wrap">
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

            <Text>
              Temukan Jurusan Kuliah yang Sesuai Dengan Kepribadianmu!
            </Text>

            <Button
              color="white"
              borderRadius="full"
              marginY={8}
              bgGradient="linear(to-br, cyan.500, blue.900)"
              rightIcon={<FaArrowRight />}
              onClick={() => router.push('/konsultasi')}
              _hover={{
                bgGradient: 'linear(to-br, cyan.600, blue.900)',
              }}
              _active={{
                bgGradient: 'linear(to-br, cyan.600, blue.900)',
              }}
            >
              Konsultasi Sekarang
            </Button>
          </Box>

          <Box
            flexBasis={['100%', '100%', '50%']}
            textAlign="center"
            marginTop={['2', '2', '8']}
            marginBottom={8}
          >
            <Image marginX="auto" src="/assets/icons/robot.png" alt="robot" />
            <ChakraLink
              href="https://www.freepik.com"
              fontSize="small"
              isExternal
            >
              Designed by by macrovector / Freepik
            </ChakraLink>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Home;
