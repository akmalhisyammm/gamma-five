import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { NextPage } from 'next';

import Layout from 'components/layout';

const Kontak: NextPage = () => {
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

      <Box marginY={12}>
        <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} gap={4}>
          <FormControl id="firstname" isRequired>
            <FormLabel>Nama Depan</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="lastname" isRequired>
            <FormLabel>Nama Belakang</FormLabel>
            <Input type="text" />
          </FormControl>
        </Grid>

        <FormControl id="email" marginTop={6} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="subject" marginTop={6} isRequired>
          <FormLabel>Subjek</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="message" marginTop={6} isRequired>
          <FormLabel>Pesan</FormLabel>
          <Textarea placeholder="Masukkan pesan" />
        </FormControl>

        <Button colorScheme="teal" type="submit" marginY={6}>
          Kirim
        </Button>
      </Box>
    </Layout>
  );
};

export default Kontak;
