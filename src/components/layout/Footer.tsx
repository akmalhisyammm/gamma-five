import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      marginTop={8}
      marginBottom={['28', '28', '8']}
    >
      <Text>
        2021 &bull;{' '}
        <Link href="/about" passHref>
          <ChakraLink>Gamma-5</ChakraLink>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
