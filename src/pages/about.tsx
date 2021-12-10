import { Box, Heading } from '@chakra-ui/react';
import { Info, Team } from 'components/aboutSections';
import Layout from 'components/layout';

const About = () => {
  return (
    <Layout title="Tentang">
      <Box textAlign="center">
        <Heading>Tentang Kami</Heading>
        <hr
          style={{
            borderBottom: '2px solid',
            width: 100,
            margin: '12px auto 0'
          }}
        />

        <Info />
        <Team />
      </Box>
    </Layout>
  );
};

export default About;
