import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Cuisine from './Cuisine';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/cuisine/:type" element={<Cuisine/>} />
    </Routes>
  )
}

export default Routing