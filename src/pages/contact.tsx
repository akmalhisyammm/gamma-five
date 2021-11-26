import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

import { ContactForm } from 'components/contactSections';
import Layout from 'components/layout';

const Contact: NextPage = () => {
  return (
    <Layout title="Kontak">
      <Heading textAlign="center">Kontak Kami</Heading>
      <hr
        style={{
          border: '1px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />

      <ContactForm />
    </Layout>
  );
};

export default Contact;
