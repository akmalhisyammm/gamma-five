import { Flex, useColorMode } from '@chakra-ui/react';

import Navigation from './Navigation';

const TabBar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      zIndex={10}
      display={['flex', 'flex', 'none']}
      marginX={['5%', '3%', '2%', 0]}
      width={['90%', '94%', '82%', 800]}
      height={['5rem', '5rem', '8rem']}
      bottom={18}
      borderRadius={20}
      border="3px solid #4299E1"
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.700'}
      padding={22}
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}>
      <Navigation />
    </Flex>
  );
};

export default TabBar;
