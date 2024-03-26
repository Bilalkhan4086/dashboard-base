import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: any) => {
  const isAuthenticatedUser = useSelector(
    (state: any) => state?.auth?.isAuthenticatedUser
  );
  return (
    <>
      {isAuthenticatedUser ? (
        children
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </>
  );
};

export default AuthGuard;
