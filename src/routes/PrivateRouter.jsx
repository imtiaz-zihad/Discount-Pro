/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../componentes/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // const location = useLocation();

  if (loading) {
    

    return <Loading />;
  }

  if (user && user?.email) {
    return children
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRouter;
