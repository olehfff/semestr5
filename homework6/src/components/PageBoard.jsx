import Event from "./Event";
import styled from "styled-components";
import Data from "../upcoming-events.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: rgb(205, 204, 204);
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const MainTitle = styled.h1`
  width: 100%;
  background-color: rgba(121, 226, 255, 0.8);
  border: 2px solid rgba(0, 195, 255, 0.3);
  border-radius: 15px;
  font-size: 36px;
  padding: 15px;
`

export default function PageBoard({ events =  Data}) {
  return (
    <>
      <MainTitle>24th Core Worlds Coalition Conference</MainTitle>

      <Container className="page-board">
        {events.map((event, index) => (
          <Event
            key={index}
            name={event.name}
            location={event.location}
            speaker={event.speaker}
            type={event.type}
            start={event.time.start}
            end={event.time.end}
          ></Event>
        ))}
        ;
      </Container>
    </>
  );
}