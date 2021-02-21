import styled from "@emotion/styled";

const Container = styled.div`
  padding: 12px;
  padding-bottom: 6px;
  border-radius: 12px;
  background: ${({ bg }) => bg};
  margin-bottom: 8px;
  cursor: pointer;
`;
const Title = styled.p`
  font-size: 16px;
  color: #00171f;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Icon = styled.i`
  margin-right: 6px;
  font-size: 16px;
  color: #003459;
`;
const Timestamp = styled.p`
  font-size: 16px;
  color: #525456;
  font-weight: 400;
  font-size: 12px;
  margin-top: 8px;
`;

export default function Note({ data, handleClick }) {
  return (
    <Container bg={data?.pinned ? "#1ebf1" : "#e5e5e5"} onClick={handleClick}>
      <Row>
        {data?.pinned && <Icon className="material-icons">push_pin</Icon>}
        <Title>{data?.title}</Title>
      </Row>
      <Timestamp>Dec 14 2020</Timestamp>
    </Container>
  );
}
