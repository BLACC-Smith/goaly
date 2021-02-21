import { firestore } from "./config";

export const getInitialNotes = async () => {
  try {
    const snapshot = await firestore.collection("notes").get();
    const notes = [];
    snapshot.forEach((doc) => {
      notes.push({ id: doc.id, ...doc.data() });
    });
    return notes;
  } catch (err) {
    console.log("Error getting documents: ", err);
  }
};

//New Note
export const addNewNote = async (data) => {
  try {
    const doc = await firestore.collection("notes").add(data);
    return doc;
  } catch (error) {
    console.log({ addNewNote: error });
  }
};

//THESE ARE ALL OUR BACKEND FUNCTIONS GUYS
