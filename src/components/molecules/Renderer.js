import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #eeeeee;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-weight: 600;
  color: #00171f;
  font-size: 32px;
`;
const ContentWrapper = styled.div`
  height: 100%;
`;

export default function Renderer({ note }) {
  return (
    <Container>
      <Title>{note?.title}</Title>
      <ContentWrapper>
        <ReactMarkdown children={note?.content} />
      </ContentWrapper>
    </Container>
  );
}
