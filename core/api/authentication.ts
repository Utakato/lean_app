import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

import {
  ForgotPasswordData,
  LoginData,
  SignUpData,
} from "../../features/authentication/redux/types";
import { db, firebaseApp } from "../firebase";

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

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("succes!");
  } catch (e) {
    console.log(e);
  }
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

export const addNewUser = async (userId: string) => {
  try {
    const userRef = doc(db, "users", userId);

    const res = await setDoc(userRef, {
      uid: userId,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// Just implemented this, you need to call this after registration/login/ whenever you update the user.
export const getUser = async (userId: string) => {
  console.log(userId);
  try {
    const userRef = doc(db, "users", userId);
    const res = await getDoc(userRef);
    console.log(res.data());
    return res.data();
  } catch (err) {
    console.log(err);
  }
};
//  tba types
export const getUserIdeas = async (userId: string) => {
  console.log(userId);
  try {
    const res = await getDocs(collection(db, "users", userId, "ideas"));
    console.log(res);
    let allIdeas: any[] = [];
    res.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      const completeData = {
        id: doc.id,
        ...doc.data(),
      };
      allIdeas.push(completeData);
    });
    return allIdeas;
  } catch (err) {
    console.log(err);
  }
};
