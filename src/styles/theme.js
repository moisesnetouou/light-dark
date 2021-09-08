import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#E5E5E5", "#343434") (props),
        color: props.colorMode === "light" ? "#444444" : "#DBDBDB",
      },
    })
  },
  config,
  fonts: {
    body: 'Sora, system-ui, sans-serif',
    heading: 'Sora, Sora, system-ui, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  // styles: {
  //   global: {
  //     'html, body': {
  //       background: 'gray.200',
  //     },
  //   },
  // },
  radii: {
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    '6xl': '54px',
  },
  colors: {
    orange: {
      500: '#d42',
    },
    blue: {
      300: '#1475FC',
      550: '#149AF8',
    },
  },
});

export default customTheme;