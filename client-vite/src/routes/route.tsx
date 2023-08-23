import { RouteObject } from 'react-router-dom';
import Page404 from '../pages/result/page404';
import LoginPage from '../pages/login/login';
import RegisterPage from '../pages/register/register';
import DepartmentLayout from '../layouts/DepartmentLayout';
import StudentLayout from '../layouts/StudentLayout';
// import Scheduler from '../pages/Schedule/SchedulePage';
import LecturerPage from '../pages/lecturer/lecturerPage';
import StaffPage from '../pages/staff/staffPage';
import TheatrePage from '../pages/theatre/theatrePage';
import LecturerCreatePage from '../pages/lecturercreate/lecturerCreate';

const browerRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <Page404 />,
  },
  // {
  //   path: '/register',
  //   element: <RegisterPage />,
  //   errorElement: <Page404 />,
  // },
  {
    path: '/department',
    element: <DepartmentLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: '/department/schedule',
        // element: <Scheduler />,
        errorElement: <Page404 />,
      },
      {
        path: '/department/lecturerlist',
        element:<LecturerPage/>,
        errorElement: <Page404 />,
      },
      {
        path: '/department/lecturercreate',
        element:<LecturerCreatePage/>,
        errorElement: <Page404 />,
      },
      {
        path: '/department/staff',
        element: <StaffPage />,
        errorElement: <Page404 />,
      },
      {
        path: '/department/theatre',
        element: <TheatrePage />,
        errorElement: <Page404 />,
      },
    ],
  },
  {
    path: '/guest',
    element: <StudentLayout />,
    errorElement: <Page404 />,
  },
];
export default browerRoutes;
