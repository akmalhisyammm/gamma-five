import { IconButton, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { FaPaperPlane, FaHome, FaBrain, FaUser } from 'react-icons/fa';

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const router = useRouter();

  return (
    <Tooltip label={label}>
      <IconButton
        aria-label={label}
        variant="ghost"
        flexBasis="25%"
        fontSize={['2xl', 'md']}
        padding={0}
        onClick={() => router.push(href)}
      >
        {icon({ style: { cursor: 'pointer' } })}
      </IconButton>
    </Tooltip>
  );
};

const navigations: NavItemProps[] = [
  {
    href: '/',
    label: 'Beranda',
    icon: FaHome,
  },
  {
    href: '/konsultasi',
    label: 'Konsultasi',
    icon: FaBrain,
  },
  {
    href: '/kontak',
    label: 'Kontak',
    icon: FaPaperPlane,
  },
  {
    href: '/tentang',
    label: 'Tentang',
    icon: FaUser,
  },
];

const Navigation = () => {
  return (
    <>
      {navigations.map((navigation) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </>
  );
};

export default Navigation;
