import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@configs/firebaseConfig';

import { AuthorizationLayout } from '@layouts/AuthorizationLayout/UnauthorizedLayout';
import { NavigationLayout } from '@layouts/NavigationLayout/NavigationLayout';
import { ComingSoonPage } from '@pages/ComingSoon/ComingSoonPage';
import { ResetPasswordForm } from '@modules/ResetPassword';
import { SignInForm } from '@modules/SignIn';
import { SignUpForm } from '@modules/SignUp';
import { PageLoader } from '@components/Loader/Loader';
import { RoutesEnum } from '@enums/routes';

const MainPage = lazy(() => import('@pages/Main/MainPage'));
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFoundPage'));
const SearchPage = lazy(() => import('@pages/Search/SearchPage'));

export const App = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route element={<AuthorizationLayout />}>
        <Route path={RoutesEnum.SignIn} element={<SignInForm />} />
        <Route path={RoutesEnum.SignUp} element={<SignUpForm />} />
        <Route path={RoutesEnum.ResetPassword} element={<ResetPasswordForm />} />
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
