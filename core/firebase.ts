import getConfig from "next/config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// const analytics = getAnalytics(app);
