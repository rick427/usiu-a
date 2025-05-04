import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';

//@: All packages except `@mantine/hooks` require style imports
import '@mantine/core/styles.css';

import App from './App.tsx';
import { primary, secondary } from "@/constants/colors.ts";

const theme = createTheme({
  primaryColor: "primary",
  fontFamily: 'Lato, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, serif',
  },
  colors: {
    primary,
    secondary,
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
