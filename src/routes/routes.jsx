import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import PublicRoutes from './publicRoute';
import { publicScreens } from './paths';
import NotFound from '../components/NotFound';

const AppRoutes = ({ _publicScreen }) => {
  let routes = useRoutes([
    {
      element: <PublicRoutes />,
      children: _publicScreen,
    },
    // { element: <PrivateRoutes />, children: _privateScreen },
    { path: '', element: <NotFound /> },
  ]);

  return routes;
};

const RouteProvider = () => {
  const _publicScreen = publicScreens;
  // const _privateScreens = privateScreens;

  return (
    <Router>
      <AppRoutes
        _publicScreen={_publicScreen}
      // _privateScreen={_privateScreen}
      />
    </Router>
  );
};

export default RouteProvider;
