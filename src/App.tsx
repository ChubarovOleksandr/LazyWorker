import { Route, Routes } from 'react-router-dom';

import '@configs/firebaseConfig';

import { AuthorizationLayout } from '@layouts/AuthorizationLayout/UnauthorizedLayout';
import { NavigationLayout } from '@layouts/NavigationLayout/NavigationLayout';
import { ComingSoonPage } from '@pages/ComingSoon/ComingSoonPage';
import { MainPage } from '@pages/Main/MainPage';
import { NotFoundPage } from '@pages/NotFound/NotFoundPage';
import { ResetPasswordForm } from '@modules/ResetPassword';
import { SignInForm } from '@modules/SignIn';
import { SignUpForm } from '@modules/SignUp';
import { RoutesEnum } from '@enums/routes';

export const App = () => {
  return (
    <Routes>
      <Route element={<AuthorizationLayout />}>
        <Route path={RoutesEnum.SignIn} element={<SignInForm />} />
        <Route path={RoutesEnum.SignUp} element={<SignUpForm />} />
        <Route path={RoutesEnum.ResetPassword} element={<ResetPasswordForm />} />
      </Route>

      <Route element={<NavigationLayout />}>
        <Route path={RoutesEnum.Main} index element={<MainPage />} />
      </Route>

      <Route path={RoutesEnum.NotFound} element={<NotFoundPage />} />
      <Route path={RoutesEnum.ComingSoon} element={<ComingSoonPage />} />
    </Routes>
  );
};
