import { useEffect, useState } from "react";
import RecipePreview from "./RecipePreview";
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Typography } from "@mui/material";

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getPopularRecipes = async()=> {

    const local = localStorage.getItem("Popular recipes");

    if (local){
      setPopularRecipes(JSON.parse(local))
    } else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await response.json();
      //console.log(data.recipes);
      setPopularRecipes(data.recipes); 
      localStorage.setItem("Popular recipes", JSON.stringify(data.recipes))      
    }
  };

  useEffect(() => {
    getPopularRecipes();
  }, []);

  return (
    <>
      <Typography 
        variant="h5" 
        sx={{
          marginY: '20px'
        }}>Popular Recipes
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
          popularRecipes.map((recipe) => (
            <SplideSlide>
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

export default PopularRecipes