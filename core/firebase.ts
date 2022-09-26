import getConfig from "next/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { publicRuntimeConfig } = getConfig();

const firebaseConfig = {
  apiKey: publicRuntimeConfig.apiKey,
  authDomain: publicRuntimeConfig.authDomain,
  projectId: publicRuntimeConfig.projectId,
  storageBucket: publicRuntimeConfig.storageBucket,
  messagingSenderId: publicRuntimeConfig.messagingSenderId,
  appId: publicRuntimeConfig.appId,
  measurementId: publicRuntimeConfig.measurementId,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
