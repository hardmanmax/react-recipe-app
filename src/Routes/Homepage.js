import Searchbar from "../Components/Searchbar";
import PopularRecipes from "../Components/PopularRecipes";
import VegetarianRecipes from "../Components/VegetarianRecipes";
import VeganRecipes from "../Components/VeganRecipes";

const Homepage = () => {
  return (
    <>
      <Searchbar />
      <PopularRecipes/>
      <VegetarianRecipes/>
      <VeganRecipes />
    </>
  )
}

export default Homepage