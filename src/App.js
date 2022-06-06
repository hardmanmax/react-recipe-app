import Routing from "./Routes/Routing";
import Searchbar from "./Components/Searchbar";
import HomeLogo from "./Components/HomeLogo";
import Surprise from "./Components/Surprise";

const App = () => {
  return (
    <>
      <HomeLogo />
      <Searchbar />
      <Routing />
      <Surprise />
    </>
  );
}

export default App;
