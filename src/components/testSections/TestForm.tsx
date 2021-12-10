import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Characteristic, RadioInput } from 'models';
import MotionBox from 'components/motion/MotionBox';

type TestFormProps = {
  characteristics: Array<Characteristic>;
  inferData: (data: RadioInput) => void;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 25, transition: { type: 'spring' } },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', delay: 0.5 }
  }
};

const TestForm = ({ characteristics, inferData }: TestFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<any>();

  const onSubmit: SubmitHandler<RadioInput> = (data) => inferData(data);

  const backgroundColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box marginY={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {characteristics.map((characteristic) => (
          <MotionBox
            key={characteristic.id}
            border="1px solid"
            borderRadius="8px"
            marginY={4}
            backgroundColor={backgroundColor}
            variants={variants}
            initial="hidden"
            animate="enter">
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
                    <Stack direction={['column', 'column', 'row']} spacing="24px" justify="center">
                      <Radio colorScheme="red" value="-0.6">
                        Tidak Cocok
                      </Radio>
                      <Radio colorScheme="yellow" value="-0.2">
                        Kurang Cocok
                      </Radio>
                      <Radio colorScheme="teal" value="0.6">
                        Cocok
                      </Radio>
                      <Radio colorScheme="green" value="1">
                        Sangat Cocok
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
            </FormControl>
          </MotionBox>
        ))}

        <Button
          type="submit"
          colorScheme="teal"
          marginY={2}
          loadingText="Sedang Memeriksa"
          spinnerPlacement="start"
          isLoading={isSubmitting}
          isFullWidth>
          Periksa
        </Button>
      </form>
    </Box>
  );
};

export default TestForm;
