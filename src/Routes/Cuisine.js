import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import RecipePreview from "../Components/RecipePreview";
import { Typography } from "@mui/material";

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  const [cuisineTitle, setCuisineTitle] = useState("");

  let params = useParams()

  const getCuisine = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
    const data = await response.json();
    setCuisineTitle(name);
    setCuisine(data.results)
  }

  useEffect(() => {
    getCuisine(params.type);
  }, [params.name])

  const capsName = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1)
  }

  return (
    <Box>
      <Typography 
        variant="h5" 
        sx={{
          marginY: '20px'
        }}
      >
        {capsName(cuisineTitle)} Recipes
      </Typography>
      <Grid 
        container 
        spacing={{ xs: 2, md: 3 }} 
      >
        {
          cuisine.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <RecipePreview recipe={recipe}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Cuisine