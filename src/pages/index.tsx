import { Box, Flex } from '@chakra-ui/react';
import { Hero, Welcome } from 'components/homeSections';
import Layout from 'components/layout';

const Home = () => {
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
