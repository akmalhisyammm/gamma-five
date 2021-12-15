import { Button, FormControl, FormLabel, Grid, Input, Textarea, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactMessage } from 'models';
import MotionBox from 'components/motion/MotionBox';

type ContactFormProps = {
  sendMessage: (data: ContactMessage) => void;
};

const variants = {
  hidden: { opacity: 0, x: -35, y: 0, transition: { type: 'spring' } },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', delay: 0.25 }
  },
  exit: {
    opacity: 0,
    x: 35,
    y: 0,
    transition: { type: 'spring', delay: 0.25 }
  }
};

const ContactForm = ({ sendMessage }: ContactFormProps) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<any>();

  const onSubmit: SubmitHandler<ContactMessage> = (data) => {
    try {
      sendMessage(data);
      toast({
        title: 'Sukses!',
        description: 'Pesan Berhasil Dikirim.',
        status: 'success',
        duration: 5000,
        isClosable: true
      });
    } catch (err) {
      toast({
        title: 'Gagal!',
        description: 'Pesan Gagal Dikirim.',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
    reset();
  };

  return (
    <MotionBox marginY={12} variants={variants} initial="hidden" animate="enter" exit="exit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)']} gap={4}>
          <FormControl id="firstName" htmlFor="firstName" isInvalid={errors.name} isRequired>
            <FormLabel>Nama Depan</FormLabel>
            <Input
              type="text"
              borderColor="gray.500"
              {...register('firstName', { required: true, maxLength: 16 })}
            />
          </FormControl>

          <FormControl id="lastName" htmlFor="lastName" isInvalid={errors.name} isRequired>
            <FormLabel>Nama Belakang</FormLabel>
            <Input
              type="text"
              borderColor="gray.500"
              {...register('lastName', { required: true, maxLength: 16 })}
            />
          </FormControl>
        </Grid>

        <FormControl id="email" htmlFor="email" marginTop={6} isInvalid={errors.name} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            borderColor="gray.500"
            {...register('email', {
              required: true,
              maxLength: 32,
              pattern: /^\S+@\S+$/i
            })}
          />
        </FormControl>

        <FormControl
          id="subject"
          htmlFor="subject"
          marginTop={6}
          isInvalid={errors.name}
          isRequired>
          <FormLabel>Subjek</FormLabel>
          <Input
            type="text"
            borderColor="gray.500"
            {...register('subject', { required: true, maxLength: 64 })}
          />
        </FormControl>

        <FormControl
          id="message"
          htmlFor="message"
          marginTop={6}
          isInvalid={errors.name}
          isRequired>
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
          marginY={6}
          loadingText="Sedang Mengirim"
          isLoading={isSubmitting}
          isFullWidth>
          Kirim
        </Button>
      </form>
    </MotionBox>
  );
};

export default ContactForm;
