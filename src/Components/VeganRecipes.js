import { useEffect, useState } from "react";
import RecipePreview from "./RecipePreview";
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Typography } from "@mui/material";
import ErrorMsg from "../Components/ErrorMsg";

const VeganRecipes = () => {
  const [veganRecipes, setVeganRecipes] = useState([]);

  const getVeganRecipes = async()=> {

    // const local = localStorage.getItem("Vegan recipes");

    // if (local){
    //   setVeganRecipes(JSON.parse(local))
    // } else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegan`);
      const data = await response.json();
      //console.log(data.recipes);
      setVeganRecipes(data.recipes); 
      // localStorage.setItem("Vegan recipes", JSON.stringify(data.recipes))      
    // }
  };

  useEffect(() => {
    getVeganRecipes();
  }, []);

  return (
    <>
      { veganRecipes ? (
        <>
          <Typography 
            variant="h5" 
            sx={{
              marginY: '20px'
            }}>Vegan Recipes
          </Typography>
          <Splide
          options ={{
            breakpoints: {
              600: {
                perPage: 1,
              },
              900: {
                perPage: 2,
              },
              1200: {
                perPage: 3,
              },
              3000: {
                perPage: 3
              },
            },
            drag: 'free',
            gap: '2rem',
            snap: true,
            rewind: true,
          }}
        > 
            {
              veganRecipes.map((recipe) => (
                <SplideSlide key={recipe.id}>
                  <div style={{margin: "2px"}}>
                    <RecipePreview recipe={recipe} />
                  </div>
                </SplideSlide>
              ))
            }
          </Splide>
        </>
      ) : (
        <ErrorMsg />
      )
    } 
  </>
  )
}

export default VeganRecipes;