import styled from 'styled-components'
import tasteBall from "./assets";

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  width: 300px;
background-color: orange;
`;

const Title = styled.h2`
  color: black;
`;
const Text = styled.p`
color: grey;
font-weight: 500;
`

export default function Event({tasteBall, name, location, speaker,type,start,end}) {
    return (

        <EventContainer className="event-container">
            <Title className="event-name">{name}</Title>
            <img src="taste" alt="taste" /><Text className="event-location">Location: {location}</Text>
            <Text className="event-speaker">Speaker: {speaker}</Text>
            <Text className="event-type">Type: {type}</Text>
            <Text className="event-start">Start: {start}</Text>
            <Text className="event-end">End: {end}</Text>
        </EventContainer>
    )

}