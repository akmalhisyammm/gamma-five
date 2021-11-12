import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

import Layout from 'components/layout';

const Tentang: NextPage = () => {
  return (
    <Layout title="Tentang">
      <Box textAlign="center">
        <Heading>Tentang Kami</Heading>
        <hr
          style={{
            border: '1px solid',
            width: 100,
            margin: '12px auto 0',
          }}
        />

        <Flex
          flexDirection="column"
          alignItems="center"
          marginTop={4}
          marginBottom={8}
        >
          <Image src="/assets/icons/teamwork.png" alt="teamwork" />
          <ChakraLink href="http://www.freepik.com" fontSize="small" isExternal>
            Designed by katemangostar / Freepik
          </ChakraLink>
        </Flex>

        <Box as="text">
          Web Sistem Pakar Gamma-5 merupakan web untuk menentukan jurusan kuliah
          berdasarkan kepribadian calon mahasiswa dengan menggunakan Metode{' '}
          <Text as="i">Forward Chaining</Text>.
        </Box>

        <Box marginY={20}>
          <Heading size="md">Tim Pengembang</Heading>

          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(3, 1fr)',
            ]}
            gap={4}
            marginTop={6}
          >
            <Flex flexDirection="column" alignItems="center">
              <Image
                border="4px solid"
                borderRadius="full"
                boxSize="200px"
                marginBottom={4}
                src="assets/images/fajri.jpg"
                alt="fajri"
              />
              <Text>Muhamad Fajri Tirta Nugraha</Text>
              <Text>00000038816</Text>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
              <Image
                border="4px solid"
                borderRadius="full"
                boxSize="200px"
                marginBottom={4}
                src="assets/images/akmal.jpg"
                alt="akmal"
              />
              <Text>Muhammad Akmal Hisyam</Text>
              <Text>00000040027</Text>
            </Flex>

            <Flex flexDirection="column" alignItems="center">
              <Image
                border="4px solid"
                borderRadius="full"
                boxSize="200px"
                marginBottom={4}
                src="assets/images/pandu.jpg"
                alt="pandu"
              />
              <Text>Pandu Wijaya</Text>
              <Text>00000039905</Text>
            </Flex>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Tentang;
