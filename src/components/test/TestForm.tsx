import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Characteristic } from 'types/characteristic';
import { RadioInput } from 'types/inference';

type TestFormProps = {
  characteristics: Characteristic[];
  inferData: (data: RadioInput) => void;
};

const TestForm = ({ characteristics, inferData }: TestFormProps) => {
  const backgroundColor = useColorModeValue('gray.50', 'gray.800');

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting = true },
  } = useForm<any>();

  const onSubmit: SubmitHandler<RadioInput> = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(inferData(data)), 2000);
    });
  };

  return (
    <Box marginY={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show">
          {characteristics.map((characteristic) => (
            <motion.div
              key={characteristic.id}
              variants={{
                hidden: { y: 50, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
              }}>
              <Box
                border="1px solid"
                borderRadius="8px"
                marginY={4}
                backgroundColor={backgroundColor}>
                <FormControl
                  as="fieldset"
                  marginTop={6}
                  paddingX={8}
                  paddingTop={4}
                  paddingBottom={8}
                  isRequired
                  isInvalid={errors.name}>
                  <FormLabel as="legend" fontSize="xl" textAlign={['left', 'left', 'center']}>
                    {characteristic.statement}
                  </FormLabel>

                  <Controller
                    name={characteristic.characteristic_id}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <Stack
                          direction={['column', 'column', 'row']}
                          spacing="24px"
                          justify="center">
                          <Radio colorScheme="red" value="0">
                            Tidak
                          </Radio>
                          <Radio colorScheme="yellow" value="0.4">
                            Mungkin
                          </Radio>
                          <Radio colorScheme="blue" value="0.6">
                            Kemungkinan Besar
                          </Radio>
                          <Radio colorScheme="teal" value="0.8">
                            Hampir Pasti
                          </Radio>
                          <Radio colorScheme="green" value="1">
                            Pasti
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Box>
            </motion.div>
          ))}

          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            marginY={2}
            loadingText="Sedang Memeriksa"
            spinnerPlacement="start"
            isLoading={isSubmitting}>
            Periksa
          </Button>
        </motion.div>
      </form>
    </Box>
  );
};

export default TestForm;
