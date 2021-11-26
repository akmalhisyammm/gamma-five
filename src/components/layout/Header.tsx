import {
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="full"
      height={100}
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.700'}
      boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);"
      position="fixed"
      zIndex={5}
    >
      <Flex
        align="center"
        height="full"
        maxWidth={800}
        margin="0 auto"
        padding={4}
      >
        <Box>
          <Link href="/" passHref>
            <ChakraLink>
              <Flex alignItems="center">
                <Image width={[12, 16]} src="/assets/logo.png" alt="logo" />
                <Box marginLeft={4}>
                  <Heading
                    as="h1"
                    fontSize={['1rem', '1.5rem']}
                    fontWeight="600"
                    mb={1}
                  >
                    Gamma-5
                  </Heading>
                  <Text fontSize="0.75rem" fontWeight="400">
                    Tes Jurusan Kuliah
                  </Text>
                </Box>
              </Flex>
            </ChakraLink>
          </Link>
        </Box>

        <Spacer />

        <Flex alignItems="center" gridGap={4}>
          <Flex display={['none', 'none', 'flex']}>
            <Link href="/" passHref scroll={false}>
              <ChakraLink marginX={3}>
                <Text>Beranda</Text>
              </ChakraLink>
            </Link>
            <Link href="/contact" passHref scroll={false}>
              <ChakraLink marginX={3}>
                <Text>Kontak</Text>
              </ChakraLink>
            </Link>
            <Link href="/about" passHref scroll={false}>
              <ChakraLink marginX={3}>
                <Text>Tentang</Text>
              </ChakraLink>
            </Link>
          </Flex>

          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
