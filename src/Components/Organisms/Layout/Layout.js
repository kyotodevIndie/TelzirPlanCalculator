import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../Atoms/Footer';
import Navbar from '../Navbar';
// import BackgroundImage from '../../../Assets/Images/background.svg'

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
