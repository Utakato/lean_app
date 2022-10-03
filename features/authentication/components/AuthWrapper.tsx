import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { firebaseApp } from "../../../core/firebase";
import { useAppDispatch, useAppSelector } from "../../../core/redux/store";
import { setUserId, getUserAction } from "../redux";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const auth = getAuth(firebaseApp);

  const { uid } = useAppSelector((root) => root.authentication);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        console.log("user already logged in");
        dispatch(setUserId(usr.uid));
      } else {
        console.log("user not logged in");
        dispatch(setUserId(""));
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (uid) {
      dispatch(getUserAction(uid));
    }
  }, [uid]);

  return <>{children}</>;
};
