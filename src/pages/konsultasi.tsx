import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Layout from 'components/layout';

const Konsultasi: NextPage = () => {
  return (
    <Layout title="Konsultasi">
      <Heading textAlign="center">Konsultasi</Heading>
      <hr
        style={{
          border: '1px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />
    </Layout>
  );
};

export default Konsultasi;
