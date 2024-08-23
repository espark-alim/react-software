import Splash from "../components/screens/Splash";
import Welcome from "../components/screens/Welcome";
import Forget from "../components/screens/Forget";
import WeAreDone from "../components/screens/WeAreDone";
import AuthLayout from "../layouts/AuthLayout";

export const routes = {
  splash: '/',
  welcome: '/welcome',
  forget: '/forget',
  we_are_done: '/we-are-done',
  privicy_policy: '/privicy-policy',
  error: '*',
};

export const publicScreens = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.splash,
        element: <Splash />,
      },
      {
        path: routes.welcome,
        element: <Welcome />,
      },
      {
        path: routes.forget,
        element: <Forget />,
      },
      {
        path: routes.we_are_done,
        element: <WeAreDone />,
      },
    ],
  },
];

// export const privateScreens = [
//  {
// element: <DashboardLayout />,
//   children: [
//     {
//       path: ,
//       element: ,
//     },
//   ],
//   },
// ];
