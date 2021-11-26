import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Layout from 'components/layout';
import { Hero, Welcome } from 'components/homeSections';

const Home: NextPage = () => {
  return (
    <Layout title="Beranda">
      <Box textAlign={['center', 'center', 'left']}>
        <Flex wrap="wrap">
          <Welcome />
          <Hero />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Home;
