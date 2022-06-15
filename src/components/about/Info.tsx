import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut' }}>
      <Flex flexDirection="column" alignItems="center" marginTop={4} marginBottom={8}>
        <Image src="/assets/illustrations/teamwork.png" alt="teamwork" />
        <ChakraLink href="http://www.freepik.com" fontSize="small" isExternal>
          Designed by katemangostar / Freepik
        </ChakraLink>
      </Flex>

      <p>
        Web Sistem Pakar Gamma-5 merupakan web untuk menentukan jurusan kuliah berdasarkan
        kepribadian calon mahasiswa dengan menggunakan metode Certainty Factor .
      </p>
    </motion.div>
  );
};

export default Info;
