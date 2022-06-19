import { Box, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <Box marginY={12}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', delay: 0.2 }}>
        <Heading size="md">Tim Pengembang</Heading>

        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
          gap={4}
          marginTop={8}>
          <Flex flexDirection="column" alignItems="center" marginBottom={[4, 4, 0]}>
            <Image
              border="4px solid"
              borderRadius="full"
              boxSize="200px"
              marginBottom={4}
              src="/images/fajri.jpg"
              alt="Fajri Image"
            />
            <p>Muhamad Fajri Tirta Nugraha</p>
            <p>00000038816</p>
          </Flex>

          <Flex flexDirection="column" alignItems="center" marginBottom={[4, 4, 0]}>
            <Image
              border="4px solid"
              borderRadius="full"
              boxSize="200px"
              marginBottom={4}
              src="/images/akmal.jpg"
              alt="Akmal Image"
            />
            <p>Muhammad Akmal Hisyam</p>
            <p>00000040027</p>
          </Flex>

          <Flex flexDirection="column" alignItems="center" marginBottom={[4, 4, 0]}>
            <Image
              border="4px solid"
              borderRadius="full"
              boxSize="200px"
              marginBottom={4}
              src="/images/pandu.jpg"
              alt="Pandu Image"
            />
            <p>Pandu Wijaya</p>
            <p>00000039905</p>
          </Flex>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Team;
