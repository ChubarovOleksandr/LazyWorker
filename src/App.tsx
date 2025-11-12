import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import { AuthModule } from '@modules/auth/AuthModule';
import { ResetPassword } from '@modules/auth/pages/ResetPassword/ResetPassword';
import { SignIn } from '@modules/auth/pages/SignIn/SignIn';
import { SignUp } from '@modules/auth/pages/SignUp/SignUp';
import { firebaseConfig } from '@configs/firebaseConfig';
import { RoutesEnum } from '@enums/routes';
import { useCheckAuth } from '@hooks/useCheckAuth';

function App() {
  initializeApp(firebaseConfig);

  useCheckAuth();

  return (
    <Routes>
      <Route path={RoutesEnum.Main} index />
      <Route path={RoutesEnum.Auth} element={<AuthModule />}>
        <Route path={RoutesEnum.SignIn} element={<SignIn />} />
        <Route path={RoutesEnum.SignUp} element={<SignUp />} />
        <Route path={RoutesEnum.ResetPassword} element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
