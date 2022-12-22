import React from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ErrorImage from '../../../Assets/Images/error.svg';

function Error404() {
  const navigate = useNavigate();
  return (
    <Box
      textAlign="center"
      p={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Image src={ErrorImage} alt="Error 404" width="100px" mb={5} />
      <Heading display="inline-block" as="h2" size="2xl" bg="primary" backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página não encontrada
      </Text>
      <Text color="gray.500" mb={6}>
        A página que você está procurando parece não existir!
      </Text>

      <Button
        colorScheme="teal"
        bg="primary"
        color="darkText"
        variant="solid"
        onClick={() => navigate('/')}
      >
        Ir para a Home
      </Button>
    </Box>
  );
}

export default Error404;
