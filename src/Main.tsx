import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { initAuthListener } from '@store/authStore';
import { ModalContainer } from '@components/ModalContainer/ModalContainer';
import { ThemeRoot } from '@components/ThemeRoot/ThemeRoot';

import { Toast } from './ui/Toast/Toast';
import { App } from './App';

import '@radix-ui/themes/styles.css';
import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/theme-variables.scss';
import './styles/special-variables.scss';

initAuthListener();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeRoot>
        <ModalContainer />
        <App />
        <Toast />
      </ThemeRoot>
    </BrowserRouter>
  </StrictMode>,
);
