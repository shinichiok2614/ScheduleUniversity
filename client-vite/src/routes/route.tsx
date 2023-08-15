import { RouteObject } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/result/page404';

const browerRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
    errorElement: <Page404 />,
    },
];
export default browerRoutes;
