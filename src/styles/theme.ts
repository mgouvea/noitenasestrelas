import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    headings: 'Inter',
    body: 'Inter',
  },
  colors: {
    highlighticons: '#24608B',
    bgFundoSobre2: 'rgba(33,80,116,0.5)',
    bgFundoPreco: 'rgba(110, 131, 149, 0.8)',
    iceWhite: '#f6f6f6',
    titleContrast: '#232323',
    title: {
      400: '#4A5568',
    },
    bgBlack: '#232323',
    bgGray: '#828C94',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white',
      },
    },
  },
});
