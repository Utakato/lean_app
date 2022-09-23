import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  ForgotPasswordData,
  LoginData,
  SignUpData,
} from "../../features/authentication/redux/types";
import { firebaseApp } from "../firebase";

const auth = getAuth(firebaseApp);

export const login = async (loginData: LoginData) => {
  const { email, password } = loginData;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return {
    email: userCredential.user.email,
    uid: userCredential.user.uid,
  };
};

export const register = async (signUpData: SignUpData) => {
  const { email, password } = signUpData;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return {
    email: userCredential.user.email,
    uid: userCredential.user.uid,
  };
};

export const forgotPassword = async (
  forgotPasswordData: ForgotPasswordData
) => {
  const { email } = forgotPasswordData;
  try {
    await sendPasswordResetEmail(auth, email);
    return "succes";
  } catch (e) {
    return e;
  }
};
