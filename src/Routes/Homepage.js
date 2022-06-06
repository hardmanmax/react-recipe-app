import PopularRecipes from "../Components/PopularRecipes";
import VegetarianRecipes from "../Components/VegetarianRecipes";
import VeganRecipes from "../Components/VeganRecipes";
import Shortcuts from "../Components/Shortcuts";
import ManualRecipes from "../Components/NewRecipe/ManualRecipes";

const Homepage = () => {
  return (
    <>
      <Shortcuts />
      <ManualRecipes />
      <PopularRecipes/>
      <VegetarianRecipes/>
      <VeganRecipes />
    </>
  )
}

export default Homepage