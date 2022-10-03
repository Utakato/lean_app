import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

interface AddNewIdeaFieldPayload {
  userId: string;
  ideaId: string;
  payload: {
    name?: string;
    problem?: string;
    customer?: string;
    solution?: string;
    uvp?: string;
    revenue?: string;
    channels?: string;
    keyMetrics?: string;
    costs?: string;
    unfairAdvantage?: string;
  };
}

export const addNewIdea = async (userId: string) => {
  const ideaCollection = collection(db, `users/${userId}/ideas`);
  const docRef = await addDoc(ideaCollection, {});
  return docRef.id;
};

export const addNewIdeaField = async (data: AddNewIdeaFieldPayload) => {
  const { userId, ideaId, payload } = data;
  let formattedData;
  if (payload.name) {
    formattedData = payload;
  } else {
    formattedData = { leanCanvas: payload };
  }

  const ideaRef = doc(db, `users/${userId}/ideas/${ideaId}`);

  const docRef = await setDoc(ideaRef, formattedData, { merge: true });
  console.log(docRef);
  return docRef;
};
