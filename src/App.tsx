import { Route, Routes } from 'react-router-dom';

import '@configs/firebaseConfig';

import { AuthorizationLayout } from '@layouts/AuthorizationLayout/UnauthorizedLayout';
import { NavigationLayout } from '@layouts/NavigationLayout/NavigationLayout';
import { ComingSoonPage } from '@pages/ComingSoon/ComingSoonPage';
import { MainPage } from '@pages/Main/MainPage';
import { NotFoundPage } from '@pages/NotFound/NotFoundPage';
import ResetPasswordPage from '@pages/ResetPassword/ResetPasswordPage';
import { SearchPage } from '@pages/Search/SearchPage';
import SignInPage from '@pages/SignIn/SignInPage';
import SignUpPage from '@pages/SignUp/SignUpPage';
import { RoutesEnum } from '@enums/routes';

export const App = () => {
  return (
    <Routes>
      <Route element={<AuthorizationLayout />}>
        <Route path={RoutesEnum.SignIn} element={<SignInPage />} />
        <Route path={RoutesEnum.SignUp} element={<SignUpPage />} />
        <Route path={RoutesEnum.ResetPassword} element={<ResetPasswordPage />} />
      </Route>

      <Route element={<NavigationLayout />}>
        <Route path={RoutesEnum.Search} element={<SearchPage />} />
        <Route path={RoutesEnum.Main} index element={<MainPage />} />
      </Route>

      <Route path={RoutesEnum.NotFound} element={<NotFoundPage />} />
      <Route path={RoutesEnum.ComingSoon} element={<ComingSoonPage />} />
    </Routes>
  );
};
