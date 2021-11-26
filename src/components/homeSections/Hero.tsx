import { Box, Image, Link as ChakraLink } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      flexBasis={['100%', '100%', '50%']}
      textAlign="center"
      marginTop={['2', '2', '8']}
      marginBottom={8}
    >
      <Image marginX="auto" src="/assets/icons/robot.png" alt="robot" />
      <ChakraLink href="https://www.freepik.com" fontSize="small" isExternal>
        Designed by by macrovector / Freepik
      </ChakraLink>
    </Box>
  );
};

export default Hero;
