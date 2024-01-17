import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('token');

  // Check if the token exists and is valid (you might have additional validation logic here)
  const isAuthenticated = token !== null && token !== undefined;

  return isAuthenticated ? <Outlet /> : <Navigate to='/log-in' />;
};

export default PrivateRoutes;