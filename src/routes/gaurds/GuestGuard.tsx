import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }: any) => {
  const isAuthenticatedUser = useSelector(
    (state: any) => state?.auth?.isAuthenticatedUser
  );
  return <>{!isAuthenticatedUser ? children : <Navigate to={"/"} />}</>;
};

export default GuestGuard;
