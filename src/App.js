import Routing from "./Routes/Routing";
import Searchbar from "./Components/Searchbar";
import HomeLogo from "./Components/HomeLogo";
import Surprise from "./Components/Surprise";
import CreateRecipe from "./Components/NewRecipe/CreateRecipe";

const App = () => {
  return (
    <>
      <HomeLogo />
      <Searchbar />
      <Routing />
      <Surprise />
      <CreateRecipe />
    </>
  );
}

export default App;
