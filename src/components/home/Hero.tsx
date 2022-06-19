import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut' }}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}>
        <Box textAlign={['center', 'center', 'left']} marginTop={[4, 4, 0]}>
          <Heading
            as="h1"
            bgGradient="linear(to-br, cyan.500, blue.900)"
            bgClip="text"
            fontSize={['5xl', '5xl', '6xl']}
            marginBottom={4}>
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
            }}>
            Tes Sekarang
          </Button>
        </Box>

        <Image src="/illustrations/robot.png" alt="Robot Illustration" width={400} />
      </HStack>
    </motion.div>
  );
};

export default Hero;
