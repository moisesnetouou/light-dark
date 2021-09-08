import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import customTheme from '../../styles/theme';

const ThemeContainer = ({ children }) => (
  <ChakraProvider theme={customTheme} resetCSS>
    {children}
  </ChakraProvider>
);

export default ThemeContainer;