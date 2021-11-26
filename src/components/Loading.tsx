import { Box, CircularProgress } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box width="100%" textAlign="center" marginY={12}>
      <CircularProgress isIndeterminate color="cyan.500" />
    </Box>
  );
};

export default Loading;
