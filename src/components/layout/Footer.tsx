import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      marginY={8}
    >
      <Text>
        2021 &bull;{' '}
        <Link href="/tentang" passHref>
          <ChakraLink>Gamma-5</ChakraLink>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
