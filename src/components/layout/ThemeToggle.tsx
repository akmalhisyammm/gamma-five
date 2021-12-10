import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      variant="outline"
      backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
      _hover={{
        backgroundColor: colorMode === 'light' ? 'gray.200' : 'gray.700'
      }}
    />
  );
};

export default ThemeToggle;
