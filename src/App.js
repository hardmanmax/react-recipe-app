import Routing from "./Routes/Routing";
import Searchbar from "./Components/Searchbar";
import HomeLogo from "./Components/HomeLogo";

const App = () => {
  return (
    <>
      <HomeLogo />
      <Searchbar />
      <Routing />
    </>
  );
}

export default App;
