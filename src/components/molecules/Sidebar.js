import styled from "@emotion/styled";
import Note from "../atoms/Note";
import { useData } from "../../hooks/useData";

const Container = styled.div`
  width: 30%;
  height: 100%;
  background: #eeeeee;
  border-radius: 0 24px 24px 0;
  padding: 48px 12px 0 12px;
  display: flex;
  flex-direction: column;
`;
const NewNoteCTA = styled.p`
  background: #00a8e8;
  padding: 8px 16px;
  align-self: flex-start;
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
const PinnedWrapper = styled.div`
  margin-top: 36px;
`;
const Label = styled.p`
  font-size: 12px;
  color: #00171f;
  font-weight: 500;
`;
const PinnedContainer = styled.div`
  background: #eeeeee;
  /* border: 1px solid #c8c8c8; */
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.35);
  padding: 8px;
  padding-bottom: 0;
  margin-top: 8px;
  border-radius: 16px;
  max-height: 30vh;
  overflow-y: scroll;
  width: calc(30vw - 24px);
`;
const NotesContainer = styled.div`
  margin-top: 16px;
  height: 100%;
  overflow-y: scroll;
`;

export default function Sidebar() {
  const { notes, updateCurrentNote } = useData();

  return (
    <Container>
      <NewNoteCTA
        onClick={() =>
          updateCurrentNote({ title: "", content: "", pinned: false })
        }
      >
        CREATE
      </NewNoteCTA>
      <PinnedWrapper>
        <Label>Pinned</Label>
        <PinnedContainer>
          {notes
            ?.filter((el) => el.pinned)
            .map((el, idx) => (
              <Note
                key={idx}
                data={el}
                handleClick={() => updateCurrentNote(el)}
              />
            ))}
        </PinnedContainer>
      </PinnedWrapper>
      <NotesContainer>
        {notes
          .filter((el) => !el.pinned)
          .map((el, idx) => (
            <Note
              key={idx}
              data={el}
              handleClick={() => updateCurrentNote(el)}
            />
          ))}
      </NotesContainer>
    </Container>
  );
}
