import { Stack } from '@chakra-ui/react';
import navItens from '../../../Utils/navItens';
import DesktopNavItem from '../../Atoms/DesktopNavItem/DesktopNavItem';

function DesktopNav() {
  return (
    <Stack direction="row" spacing={4} alignContent="center" flexWrap="wrap">
      {navItens.map((navItem) => (
        <DesktopNavItem key={navItem.label} label={navItem.label} href={navItem.href} />
      ))}
    </Stack>
  );
}

export default DesktopNav;
