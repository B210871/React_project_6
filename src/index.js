import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/ubuntu"; 
import { theme } from './theme/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

    <App />
    </ChakraProvider>
  </React.StrictMode>
);


