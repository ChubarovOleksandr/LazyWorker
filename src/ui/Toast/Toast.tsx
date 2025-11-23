import { ToastContainer } from 'react-toastify';

export const Toast = () => (
  <ToastContainer
    position="top-center"
    autoClose={2500}
    hideProgressBar
    closeButton={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
);
