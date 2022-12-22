import { Stack } from '@chakra-ui/react';
import navItens from '../../../Utils/navItens';
import MobileNavItem from '../../Atoms/MobileNavItem';

function MobileNav() {
  return (
    <Stack bg="gray.800" p={4} display={{ md: 'none' }}>
      {navItens.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

export default MobileNav;
