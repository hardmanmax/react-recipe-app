import Searchbar from "../Components/Searchbar";
import PopularRecipes from "../Components/PopularRecipes";
import VegetarianRecipes from "../Components/VegetarianRecipes";
import VeganRecipes from "../Components/VeganRecipes";
import Shortcuts from "../Components/Shortcuts";

const Homepage = () => {
  return (
    <>
      <Searchbar />
      <Shortcuts/>
      <PopularRecipes/>
      <VegetarianRecipes/>
      <VeganRecipes />
    </>
  )
}

export default Homepage