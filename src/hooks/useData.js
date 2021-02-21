import { createContext, useContext, useState } from "react";
import { getInitialNotes, addNewNote } from "../backend";

const dataContext = createContext();

export const useData = () => {
  return useContext(dataContext);
};

export function DataProvider({ children }) {
  const data = useDataState();
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

const useDataState = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const updateInitialNotes = async () => {
    const initialNotes = await getInitialNotes();
    setNotes(initialNotes);
  };

  const updateNotes = async (payload) => {
    await addNewNote(payload);
    setNotes([...notes, payload]);
  };

  const updateNewNote = async (payload) => setNewNote(payload);
  const updateCurrentNote = async (payload) => setCurrentNote(payload);

  return {
    notes,
    newNote,
    currentNote,
    updateInitialNotes,
    updateCurrentNote,
    updateNewNote,
    updateNotes,
  };
};
