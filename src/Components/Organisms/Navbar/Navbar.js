import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../../Assets/Images/logo.svg';
import DesktopNav from '../../Molecules/DesktopNav';
import MobileNav from '../../Molecules/MobileNav';

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex height="10vh" px={{ base: 4 }} align="center">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          position="absolute"
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            variant="ghost"
            aria-label="Toggle Navigation"
            width={10}
            height={10}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image src={Logo} alt="logo" width="90px" />
        </Flex>

        <Stack justify="flex-end" direction="row" spacing={6}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Button
            bg="primary"
            color="darkText"
            fontSize="sm"
            fontWeight={400}
            href="#"
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Asssine nossos planos
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;
