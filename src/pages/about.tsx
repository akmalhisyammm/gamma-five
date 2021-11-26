import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Info, Team } from 'components/aboutSections';
import Layout from 'components/layout';

const About: NextPage = () => {
  return (
    <Layout title="Tentang">
      <Box textAlign="center">
        <Heading>Tentang Kami</Heading>
        <hr
          style={{
            border: '1px solid',
            width: 100,
            margin: '12px auto 0',
          }}
        />

        <Info />
        <Team />
      </Box>
    </Layout>
  );
};

export default About;
