import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "../Components/RecipePreview";
import ErrorMsg from "../Components/ErrorMsg";

const SearchResults = () => {

  const [searchResults, setSearchResults] = useState([]);

  let params = useParams()

  const getSearchedRecipes = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
    const data = await response.json();
    setSearchResults(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    getSearchedRecipes(params.search);
  }, [params.search]);


  return (
    <>
      {
        searchResults ? (
        <Box>
          <Typography variant="h5" my={2}>
            You searched for "{params.search}":
          </Typography>
          <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
          >
            {
              searchResults.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                  <RecipePreview recipe={recipe}/>
                </Grid>
              ))
            }
          </Grid>
        </Box>
        ) : (
          <ErrorMsg />
        )
      }
    </>
  )
}

export default SearchResults