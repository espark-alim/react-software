import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { privateScreens, publicScreens } from './paths';
import NotFound from '../components/NotFound';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const AppRoutes = ({ _publicScreen, _privateScreen }) => {
  let routes = useRoutes([
    {
      element: <PublicRoute />,
      children: _publicScreen,
    },
    { element: <PrivateRoute />, children: _privateScreen },
    { path: '', element: <NotFound /> },
  ]);

  return routes;
};

const RouteProvider = () => {
  const _publicScreen = publicScreens;
  const _privateScreen = privateScreens;

  return (
    <Router>
      <AppRoutes
        _publicScreen={_publicScreen}
        _privateScreen={_privateScreen}
      />
    </Router>
  );
};

export default RouteProvider;
