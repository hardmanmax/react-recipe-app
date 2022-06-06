import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/cuisine/:type" element={<Cuisine/>} />
      <Route path="/search/:search" element={<SearchResults/>}/>
    </Routes>
  )
}

export default Routing