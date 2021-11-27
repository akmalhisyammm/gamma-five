import { Box, Image, Link as ChakraLink } from '@chakra-ui/react';
import MotionBox from 'components/motion/MotionBox';

const variants = {
  hidden: { opacity: 0, x: 25, y: 0, transition: { type: 'spring' } },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', delay: 1 },
  },
  exit: {
    opacity: 0,
    x: 25,
    y: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
};

const Hero = () => {
  return (
    <MotionBox
      flexBasis={['100%', '100%', '50%']}
      textAlign="center"
      marginTop={['2', '2', '8']}
      marginBottom={8}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <Image marginX="auto" src="/assets/icons/robot.png" alt="robot" />
      <ChakraLink href="https://www.freepik.com" fontSize="small" isExternal>
        Designed by by macrovector / Freepik
      </ChakraLink>
    </MotionBox>
  );
};

export default Hero;
