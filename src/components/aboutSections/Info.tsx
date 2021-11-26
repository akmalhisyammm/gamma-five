import { Box, Flex, Image, Link as ChakraLink, Text } from '@chakra-ui/react';

const Info = () => {
  return (
    <>
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
    </>
  );
};

export default Info;
