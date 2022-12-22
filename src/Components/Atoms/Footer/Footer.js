/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Link, Stack, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Container
      as={Stack}
      maxW="6xl"
      height="10vh"
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify="center"
      align={{ base: 'center', md: 'center' }}
    >
      <Text>
        © 2022 Desenvolvido por{' '}
        <Link href="https://github.com/kyotodevindie" color="primary">
          Kyoto
        </Link>
        . Todos os direitos reservados
      </Text>
    </Container>
  );
}
export default Footer;
