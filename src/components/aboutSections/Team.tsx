import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import MotionBox from 'components/motion/MotionBox';

const variants = {
  hidden: { opacity: 0, x: 35, y: 0, transition: { type: 'spring' } },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: 'spring', delay: 1 },
  },
  exit: {
    opacity: 0,
    x: -35,
    y: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
};

const Team = () => {
  return (
    <MotionBox
      marginY={20}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <Heading size="md">Tim Pengembang</Heading>

      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={4}
        marginTop={8}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          marginBottom={[4, 4, 0]}
        >
          <Image
            border="4px solid"
            borderRadius="full"
            boxSize="200px"
            marginBottom={4}
            src="assets/images/fajri.jpg"
            alt="fajri"
          />
          <Text>Muhamad Fajri Tirta Nugraha</Text>
          <Text>00000038816</Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          marginBottom={[4, 4, 0]}
        >
          <Image
            border="4px solid"
            borderRadius="full"
            boxSize="200px"
            marginBottom={4}
            src="assets/images/akmal.jpg"
            alt="akmal"
          />
          <Text>Muhammad Akmal Hisyam</Text>
          <Text>00000040027</Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          marginBottom={[4, 4, 0]}
        >
          <Image
            border="4px solid"
            borderRadius="full"
            boxSize="200px"
            marginBottom={4}
            src="assets/images/pandu.jpg"
            alt="pandu"
          />
          <Text>Pandu Wijaya</Text>
          <Text>00000039905</Text>
        </Flex>
      </Grid>
    </MotionBox>
  );
};

export default Team;
