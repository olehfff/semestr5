import styled from "styled-components";
import RecipeInfo from "./RecipiesInfo";
import PropTypes from "prop-types";
const Title = styled.h1`
font-size: 180px;`

const Undertext = styled.p`
font-size: 60px;
    margin-bottom: 0px;
    margin-top: 118px;
    width: 387px;`

const Text = styled.div`
display: flex;
`

const RecipeContainer = styled.div`
`

export default function Recipe({ recipe, icon }) {
    const { name, time, servings, calories, difficulty, image } = recipe;

    return (
      <>
      <RecipeContainer className="recipe-container">
       <Text className="text">
        <Title>Hello</Title>
        <Undertext>{name}</Undertext>
        </Text>
        <div className="image">
        <img src={image} alt="image" width="300" />
        </div>
        </RecipeContainer>  
        <RecipeInfo text={time} icon={icon.time} />
        <RecipeInfo text={servings} />
        <RecipeInfo text={calories} icon={icon.calories} />
        <RecipeInfo text={difficulty} />
      </>
    );
}
Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    time: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
  }).isRequired,
};