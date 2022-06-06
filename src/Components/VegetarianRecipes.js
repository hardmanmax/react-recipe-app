import { useEffect, useState } from "react";
import RecipePreview from "./RecipePreview";
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Typography } from "@mui/material";

const VegetarianRecipes = () => {
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);

  const getVegetarianRecipes = async()=> {

    const local = localStorage.getItem("Vegetarian recipes");

    if (local){
      setVegetarianRecipes(JSON.parse(local))
    } else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await response.json();
      //console.log(data.recipes);
      setVegetarianRecipes(data.recipes); 
      localStorage.setItem("Vegetarian recipes", JSON.stringify(data.recipes))      
    }
  };

  useEffect(() => {
    getVegetarianRecipes();
  }, []);

  return (
    <>
      <Typography 
        variant="h5" 
        sx={{
          marginY: '20px'
        }}>Vegetarian Recipes
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
          vegetarianRecipes.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <div style={{margin: "2px"}}>
                <RecipePreview recipe={recipe} />
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
    </>
  )
}

export default VegetarianRecipes;