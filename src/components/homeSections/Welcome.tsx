import { Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowRight } from 'react-icons/fa';
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
    x: -25,
    y: 0,
    transition: { type: 'spring' },
  },
};

const Welcome = () => {
  const router = useRouter();

  return (
    <MotionBox
      flexBasis={['100%', '100%', '50%']}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
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
    </MotionBox>
  );
};

export default Welcome;
