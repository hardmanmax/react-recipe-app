import { useEffect, useState } from "react";

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getPopularRecipes = async()=> {

    const local = localStorage.getItem("Popular recipes");

    if (local){
      setPopularRecipes(JSON.parse(local))
    } else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
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
      {
        popularRecipes.map((item) => (
          <h2 key={item.id}>{item.title}</h2>
        ))
      }
    </>
  )
}

export default PopularRecipes