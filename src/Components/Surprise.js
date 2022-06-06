import { Tooltip, Fab } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Surprise = () => {

  const [randomPageId, setRandomPageId] = useState("")

  const navigate = useNavigate();

  const getRandomRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);
    const data = await response.json();
    setRandomPageId(data.recipes[0].id)
  };

  const goToRecipe = () => {
    getRandomRecipe();
    navigate("/recipe/" + randomPageId)

  }

  return (
      <Tooltip 
        title="Surprise me"
        sx={{
          position: "fixed",
          bottom: "2%",
          left: "2%"
        }}  
      >
        <Fab 
          variant="extended" 
          style={{height: 75, width: 75, borderRadius: "50%"}} 
          color="primary" 
          aria-label="add"
          onClick={goToRecipe}
        >
          <FontAwesomeIcon 
            icon={faShuffle}
          />
        </Fab>
      </Tooltip>
  )
}

export default Surprise