import { Heading } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { baseUrl } from 'constants/baseUrl';
import { Info, Team } from 'components/about';
import Layout from 'components/layout';

const About = () => {
  return (
    <Layout>
      <NextSeo
        title="About"
        canonical={`${baseUrl}/about`}
        openGraph={{
          title: 'About | Gamma-5',
          description: 'About page of Gamma-5',
        }}
      />

      <Heading textAlign="center">Tentang Kami</Heading>
      <hr
        style={{
          borderBottom: '2px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />
      <Info />
      <Team />
    </Layout>
  );
};

export default About;
