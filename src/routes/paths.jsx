import Splash from "../components/screens/Splash";
import Welcome from "../components/screens/Welcome";
import Forget from "../components/screens/Forget";
import WeAreDone from "../components/screens/WeAreDone";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ScreenCapture from "../components/screens/ScreenCapture";
import TimeZones from "../components/screens/TimeZones";
import Camera from "../components/screens/Camera";
import Reminder from "../components/screens/Reminder";
import KeyboardShortcuts from "../components/screens/KeyboardShortcuts";
import Advanced from "../components/screens/Advanced";

export const routes = {
  // public paths
  splash: '/',
  welcome: '/welcome',
  forget: '/forget',
  we_are_done: '/we-are-done',
  privicy_policy: '/privicy-policy',
  error: '*',

  // private paths
  screen_capture: '/screen-capture',
  time_zones: '/time-zones',
  camera: '/camera',
  reminders: '/reminders',
  keyboard_shortcuts: '/keyboard-shortcuts',
  advanced: '/advanced',
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

export const privateScreens = [
  {
    element: <DashboardLayout />,
    children: [
      {
        path: routes.screen_capture,
        element: <ScreenCapture />,
      },
      {
        path: routes.time_zones,
        element: <TimeZones />,
      },
      {
        path: routes.camera,
        element: <Camera />,
      },
      {
        path: routes.reminders,
        element: <Reminder />,
      },
      {
        path: routes.keyboard_shortcuts,
        element: <KeyboardShortcuts />,
      },
      {
        path: routes.advanced,
        element: <Advanced />,
      },
    ],
  },
];
