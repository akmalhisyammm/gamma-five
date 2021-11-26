import { Box, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';
import MotionBox from 'components/motion/MotionBox';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import TabBar from './TabBar';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -35, y: 0, transition: { type: 'spring' } },
  enter: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' } },
  exit: { opacity: 0, x: 35, y: 0, transition: { type: 'spring' } },
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

        <MotionBox
          maxWidth={800}
          margin="0 auto"
          position="relative"
          top={100}
          color={colorMode === 'light' ? 'gray.600' : 'white'}
          padding={4}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
        >
          <MotionBox as="main" width="full" marginY={22}>
            {children}
          </MotionBox>

          <Footer />
        </MotionBox>

        <TabBar />
      </Box>
    </Box>
  );
};

export default Layout;
