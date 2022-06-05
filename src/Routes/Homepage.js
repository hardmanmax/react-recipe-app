import Searchbar from "../Components/Searchbar";
import PopularRecipes from "../Components/PopularRecipes";
import VegetarianRecipes from "../Components/VegetarianRecipes";

const Homepage = () => {
  return (
    <>
      <div>Homepage</div>
      <Searchbar />
      <PopularRecipes/>
      <VegetarianRecipes/>
    </>
  )
}

export default Homepage