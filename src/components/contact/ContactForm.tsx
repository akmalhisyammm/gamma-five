import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactMessage } from 'types/contact';

type ContactFormProps = {
  sendMessage: (data: ContactMessage) => void;
};

const ContactForm = ({ sendMessage }: ContactFormProps) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<any>();

  const onSubmit: SubmitHandler<ContactMessage> = (data) => {
    try {
      sendMessage(data);
      toast({
        title: 'Sukses!',
        description: 'Pesan Berhasil Dikirim.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Gagal!',
        description: 'Pesan Gagal Dikirim.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    reset();
  };

  return (
    <Box marginY={12}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} gap={4}>
            <FormControl id="firstName" isInvalid={errors.name} isRequired>
              <FormLabel>Nama Depan</FormLabel>
              <Input
                type="text"
                borderColor="gray.500"
                {...register('firstName', { required: true, maxLength: 16 })}
              />
            </FormControl>

            <FormControl id="lastName" isInvalid={errors.name} isRequired>
              <FormLabel>Nama Belakang</FormLabel>
              <Input
                type="text"
                borderColor="gray.500"
                {...register('lastName', { required: true, maxLength: 16 })}
              />
            </FormControl>
          </Grid>

          <FormControl id="email" marginTop={6} isInvalid={errors.name} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              borderColor="gray.500"
              {...register('email', {
                required: true,
                maxLength: 32,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </FormControl>

          <FormControl id="subject" marginTop={6} isInvalid={errors.name} isRequired>
            <FormLabel>Subjek</FormLabel>
            <Input
              type="text"
              borderColor="gray.500"
              {...register('subject', { required: true, maxLength: 64 })}
            />
          </FormControl>

          <FormControl id="message" marginTop={6} isInvalid={errors.name} isRequired>
            <FormLabel>Pesan</FormLabel>
            <Textarea
              borderColor="gray.500"
              placeholder="Masukkan pesan"
              {...register('message', { required: true, maxLength: 256 })}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            type="submit"
            width="full"
            marginY={6}
            loadingText="Sedang Mengirim"
            isLoading={isSubmitting}>
            Kirim
          </Button>
        </form>
      </motion.div>
    </Box>
  );
};

export default ContactForm;
