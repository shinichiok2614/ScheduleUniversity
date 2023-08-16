import { RouteObject } from 'react-router-dom';
import Page404 from '../pages/result/page404';
import LoginPage from '../pages/login/login';

const browerRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <Page404 />,
    },
];
export default browerRoutes;
