import { Box, Flex, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import MotionBox from 'components/motion/MotionBox';

const variants = {
  hidden: { opacity: 0, x: -25, y: 0, transition: { type: 'spring' } },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
  exit: {
    opacity: 0,
    x: 25,
    y: 0,
    transition: { type: 'spring' },
  },
};

const Info = () => {
  return (
    <MotionBox variants={variants} initial="hidden" animate="enter" exit="exit">
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
    </MotionBox>
  );
};

export default Info;
