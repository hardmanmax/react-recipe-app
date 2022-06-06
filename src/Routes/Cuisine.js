import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);

  let params = useParams()

  const getCuisine = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
    const data = await response.json();
    setCuisine(data.results)
  }

  useEffect(() => {
    getCuisine(params.type);
  }, [params.name])


  return (
    <>
      {
        cuisine.map((recipe) => (
          <h1>{recipe.title}</h1>
        ))
      }
    </>
  )
}

export default Cuisine