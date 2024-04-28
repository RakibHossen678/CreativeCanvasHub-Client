import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import loadingImg from '../assets/loading.json'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()
  if (loading) {
    return (
      <div className="w-96">
         <Lottie animationData={loadingImg} loop={true} />
       
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes={
  children:PropTypes.node
}

export default PrivateRoute;
