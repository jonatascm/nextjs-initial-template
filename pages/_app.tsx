import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import theme from './styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
