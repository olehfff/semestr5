import styled from 'styled-components'
import tasteBall from "../assets/taste-ball.jpg"; 
import draft from "../assets/draft.jpg";
import ocean from "../assets/ocean.jpeg";
import clearWater from "../assets/clear-water.webp"; // Assuming you have an image for the last picture
import mountains from "../assets/mountains.jpg"; // Assuming you have an image for the last picture

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
const Picture1 = styled.img`
    width: 34px;
    position: absolute;
    right: 1687px;
    bottom: 968px;`

const Picture2 = styled.img`
    width: 34px;
    position: absolute;
    right: 1687px;
    bottom: 924px;`

const Picture3 = styled.img`
    width: 34px;
    position: absolute;
    right: 1687px;
    bottom: 869px;
    height: 32px;`

const Picture4 = styled.img`
    width: 34px;
    position: absolute;
    right: 1687px;
    bottom: 814px;`

const Picture5 = styled.img`
    width: 34px;
    position: absolute;
    right: 1687px;
    bottom: 759px;`

export default function Event({name, location, speaker,type,start,end}) {
    return (

        <EventContainer className="event-container">
            <Title className="event-name">{name}</Title>
             <Picture1 src={tasteBall} alt="taste" /> 
            <Text className="event-location">Location: {location}</Text>
             <Picture2 src={draft} alt="red-text" />
            <Text className="event-speaker">Speaker: {speaker}</Text>
             <Picture3 src={ocean} alt="talassofobia" />
            <Text className="event-type">Type: {type}</Text>
             <Picture4 src={clearWater} alt="beauti-fish" />
            <Text className="event-start">Start: {start}</Text>
             <Picture5 src={mountains} alt="Karpaty" />
            <Text className="event-end">End: {end}</Text>
        </EventContainer>
    )

}