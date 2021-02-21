import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useData } from "../../hooks/useData";
import Renderer from "./Renderer";

const Container = styled.div`
  width: 100%;
  margin: 12px;
  padding: 16px;
  border-radius: 16px;
  background: #f5f5f5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  justify-content: space-between;
`;
const Editor = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SaveButton = styled.button`
  background: #00a8e8;
  padding: 8px 16px;
  display: inline-block;
  border-radius: 50px;
  border: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  background: transparent;
  font-weight: 600;
  color: #00171f;
  margin-top: 8px;
  max-height: 150px;
  width: 50%;
  font-size: 32px;
`;

const TextArea = styled.textarea`
  background: transparent;
  border: none;
  padding: 8px;
  margin-top: 8px;
  border-radius: 16px;
  resize: none;
  height: 100%;
`;

const Icon = styled.i`
  margin-right: 6px;
  font-size: 24px;
  cursor: pointer;
  color: ${({ color }) => color};
`;

export default function Notepad() {
  const { currentNote, updateCurrentNote, updateNotes } = useData();
  const [note, setNote] = useState({
    title: "",
    content: "",
    pinned: false,
  });

  return (
    <Container>
      <Editor>
        {/* Header */}
        <Header>
          <Input
            value={currentNote.title || note.title}
            onChange={(e) => {
              if (currentNote) {
                updateCurrentNote({ ...currentNote, title: e.target.value });
              } else {
                setNote({ ...note, title: e.target.value });
              }
            }}
          />

          <ActionsWrapper>
            <SaveButton onClick={() => updateNotes(currentNote || note)}>
              <h2>Save</h2>
            </SaveButton>
          </ActionsWrapper>
        </Header>

        {/* TextArea */}
        <TextArea
          value={currentNote.content || note.content}
          onChange={(e) => {
            if (currentNote) {
              updateCurrentNote({ ...currentNote, content: e.target.value });
            } else {
              setNote({ ...note, content: e.target.value });
            }
          }}
        ></TextArea>
      </Editor>
      <Renderer note={currentNote || note} />
    </Container>
  );
}
