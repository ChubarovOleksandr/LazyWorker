import { Route, Routes } from 'react-router-dom';

import '@configs/firebaseConfig';

import { AuthorizedLayout } from '@layouts/AuthorizedLayout.tsx/AuthorizedLayout';
import { NavigationLayout } from '@layouts/NavigationLayout/NavigationLayout';
import { UnauthorizedLayout } from '@layouts/UnauthorizedLayout/UnauthorizedLayout';
import { MainPage } from '@pages/Main/MainPage';
import { NotFoundPage } from '@pages/NotFound/NotFoundPage';
import { ResetPasswordPage } from '@pages/ResetPassword/ResetPasswordPage';
import { SignInPage } from '@pages/SignIn/SignInPage';
import { SignUpPage } from '@pages/SignUp/SignUpPage';
import { RoutesEnum } from '@enums/routes';

export const App = () => {
  return (
    <Routes>
      <Route element={<UnauthorizedLayout />}>
        <Route path={RoutesEnum.SignIn} element={<SignInPage />} />
        <Route path={RoutesEnum.SignUp} element={<SignUpPage />} />
        <Route path={RoutesEnum.ResetPassword} element={<ResetPasswordPage />} />
      </Route>

      <Route element={<AuthorizedLayout />}>
        <Route element={<NavigationLayout />}>
          <Route path={RoutesEnum.Main} index element={<MainPage />} />
        </Route>
      </Route>

      <Route path={RoutesEnum.NotFoundPage} element={<NotFoundPage />} />
    </Routes>
  );
};
