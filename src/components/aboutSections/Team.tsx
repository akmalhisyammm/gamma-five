import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

const Team = () => {
  return (
    <Box marginY={20}>
      <Heading size="md">Tim Pengembang</Heading>

      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
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
  );
};

export default Team;
