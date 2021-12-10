import { Flex, useColorModeValue } from '@chakra-ui/react';

import Navigation from './Navigation';

const TabBar = () => {
  const backgroundColor = useColorModeValue('rgba(229, 235, 242, 0.95)', 'rgba(45, 55, 72, 0.95)');

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
      backgroundColor={backgroundColor}
      padding={22}
      textAlign="center"
      alignItems="center"
      fontSize={[35, 50]}>
      <Navigation />
    </Flex>
  );
};

export default TabBar;
