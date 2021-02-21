import styled from "@emotion/styled";
import { useEffect } from "react";
import Sidebar from "../molecules/Sidebar";
import Notepad from "../molecules/Notepad";
import { useData } from "../../hooks/useData";
import { getInitialNotes } from "../../backend";

const Container = styled.div`
  border: 1px solid;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export default function AppContainer() {
  const { currentNote, updateInitialNotes } = useData();

  useEffect(() => {
    updateInitialNotes();
  }, []);
  return (
    <Container>
      <Sidebar />
      {!currentNote ? <p>Select a note or create a new one </p> : <Notepad />}
    </Container>
  );
}
