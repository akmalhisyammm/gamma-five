import { IconButton } from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

const AppMenu = () => {
  return <IconButton aria-label="app menu" variant="ghost" marginLeft={2} icon={<BiMenu />} />;
};

export default AppMenu;
