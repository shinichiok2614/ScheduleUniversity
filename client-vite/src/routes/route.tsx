import { RouteObject } from 'react-router-dom';
import Page404 from '../pages/result/page404';
import LoginPage from '../pages/login/login';
import RegisterPage from '../pages/register/register';

const browerRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <Page404 />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <Page404 />,
  },
  {
    path: '/',
    element: <RegisterPage />,
    errorElement: <Page404 />,
  },
];
export default browerRoutes;
