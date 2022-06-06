import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <ul>
      {
        searchResults.map((recipe) => (
          <li>{recipe.title}</li>
        ))
      }
    </ul>
  )
}

export default SearchResults