import { extendTheme, useColorMode } from '@chakra-ui/core';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export default extendTheme({
  colors: {
    light: {
      primary: '#00a043',
      secundary: '#cc7c14',
      gray: '#b0bec5',
      error: '#cc2614',
    },
    dark: {
      primary: '#29cc6d',
      secundary: '#ffb049',
      gray: '#b0bec5',
      error: '#ff604f',
    },
  },
  config,
  styles: {
    global: (props) => ({
      'html, body': {
        width: '100%',
        height: '100%',
        backgroundColor: props.colorMode === 'light' ? '#fff' : '#04120a',
        color: props.colorMode === 'light' ? '#000' : '#fff',
      },
    }),
  },
});
