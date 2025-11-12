import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import { AuthPage } from '@pages/authPage/AuthPage';
import { ResetPassword } from '@modules/auth/components/ResetPassword/ResetPassword';
import { SignIn } from '@modules/auth/components/SignIn/SignIn';
import { SignUp } from '@modules/auth/components/SignUp/SignUp';
import { firebaseConfig } from '@configs/firebaseConfig';
import { RoutesEnum } from '@enums/routes';
import { useCheckAuth } from '@hooks/useCheckAuth';

function App() {
  initializeApp(firebaseConfig);

  useCheckAuth();

  return (
    <Routes>
      <Route path={RoutesEnum.Main} index />
      <Route path={RoutesEnum.Auth} element={<AuthPage />}>
        <Route path={RoutesEnum.SignIn} element={<SignIn />} />
        <Route path={RoutesEnum.SignUp} element={<SignUp />} />
        <Route path={RoutesEnum.ResetPassword} element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
