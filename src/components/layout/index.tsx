import { Box, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import TabBar from './TabBar';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      minHeight="100vh"
      paddingBottom={100}
      transition="0.5s ease-out"
    >
      <Box>
        <Meta title={title} />
        <Header />
        <Box
          maxWidth={800}
          margin="0 auto"
          position="relative"
          top={100}
          color={colorMode === 'light' ? 'gray.600' : 'white'}
          padding={4}
        >
          <Box as="main" width="full" marginY={22}>
            {children}
          </Box>
          <Footer />
        </Box>
        <TabBar />
      </Box>
    </Box>
  );
};

export default Layout;
