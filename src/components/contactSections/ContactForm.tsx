import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box marginY={12}>
      <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} gap={4}>
        <FormControl id="firstname" isRequired>
          <FormLabel>Nama Depan</FormLabel>
          <Input borderColor="gray.500" type="text" />
        </FormControl>
        <FormControl id="lastname" isRequired>
          <FormLabel>Nama Belakang</FormLabel>
          <Input borderColor="gray.500" type="text" />
        </FormControl>
      </Grid>

      <FormControl id="email" marginTop={6} isRequired>
        <FormLabel>Email</FormLabel>
        <Input borderColor="gray.500" type="email" />
      </FormControl>

      <FormControl id="subject" marginTop={6} isRequired>
        <FormLabel>Subjek</FormLabel>
        <Input borderColor="gray.500" type="text" />
      </FormControl>

      <FormControl id="message" marginTop={6} isRequired>
        <FormLabel>Pesan</FormLabel>
        <Textarea borderColor="gray.500" placeholder="Masukkan pesan" />
      </FormControl>

      <Button colorScheme="teal" type="submit" marginY={6} isFullWidth>
        Kirim
      </Button>
    </Box>
  );
};

export default ContactForm;
