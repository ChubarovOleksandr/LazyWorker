import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';

import App from './App.tsx';

import '@radix-ui/themes/styles.css';
import './styles/nullstyle.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="cyan">
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
);
