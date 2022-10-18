import { CircularProgress } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../core/firebase";
import { useAppDispatch, useAppSelector } from "../../../core/redux/store";
import { routes, unprotectedRoutes } from "../../../core/routes/routes";
import { setUserId, getUserAction } from "../redux";

interface AuthWrapperProps {
  children: React.ReactNode;
}

enum LoginStatus {
  IDLE = "IDLE",
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const [loginStatus, setLoginStatus] = useState(LoginStatus.IDLE);

  const routeIsUnprotected = unprotectedRoutes.includes(router.pathname);

  const { uid } = useAppSelector((root) => root.authentication);
  useEffect(() => {
    setLoginStatus(LoginStatus.PENDING);

    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        console.log("user already logged in");
        dispatch(setUserId(usr.uid));
        setLoginStatus(LoginStatus.FULFILLED);
      } else {
        console.log("user not logged in");
        dispatch(setUserId("notLoggedIn"));
        setLoginStatus(LoginStatus.REJECTED);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loginStatus === LoginStatus.REJECTED) {
      router.push(routes.login);
    }
  }, [loginStatus]);

  console.log(loginStatus);
  return (
    <>
      {routeIsUnprotected ? (
        children
      ) : loginStatus === LoginStatus.FULFILLED ? (
        children
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          <CircularProgress className="w-32 h-32" />
        </div>
      )}
    </>
  );
};
