import { extendTheme, theme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: 'Lexend, serif',
    body: 'Lexend, sans-serif',
  },
});

export default customTheme;
