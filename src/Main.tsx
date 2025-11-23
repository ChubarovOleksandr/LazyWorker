import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';

import { Toast } from './ui/Toast/Toast';
import { App } from './App';

import '@radix-ui/themes/styles.css';
import './styles/nullstyle.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="cyan">
        <App />
        <Toast />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
);
