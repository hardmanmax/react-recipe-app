import PopularRecipes from "../Components/PopularRecipes";
import VegetarianRecipes from "../Components/VegetarianRecipes";
import VeganRecipes from "../Components/VeganRecipes";

const Homepage = () => {
  return (
    <>
      <PopularRecipes/>
      <VegetarianRecipes/>
      <VeganRecipes />
    </>
  )
}

export default Homepage