import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

const addNewIdea = () => {
  const ideaRef = collection(db, "users");
};
