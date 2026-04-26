import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@configs/firebaseConfig';

import { ComingSoonPage } from '@pages/ComingSoon/ComingSoonPage';
import { PageLoader } from '@components/PageLoader/PageLoader';
import { RoutesEnum } from '@enums/routes.enum';

const MainPage = lazy(() => import('@pages/Main/MainPage'));
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFoundPage'));
const SearchPage = lazy(() => import('@pages/Search/SearchPage'));
const SignInPage = lazy(() => import('@pages/SignIn/SignInPage'));
const SignUpPage = lazy(() => import('@pages/SignUp/SignUpPage'));
const ResetPasswordPage = lazy(() => import('@pages/ResetPassword/ResetPasswordPage'));
const AuthorizationLayout = lazy(() => import('@layouts/AuthorizationLayout/UnauthorizedLayout'));
const NavigationLayout = lazy(() => import('@layouts/NavigationLayout/NavigationLayout'));

export const App = () => (
  <Suspense fallback={<PageLoader />}>
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
  </Suspense>
);
