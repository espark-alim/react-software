import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to="/screen-1" /> : <Outlet />;
};

export default PublicRoute;
