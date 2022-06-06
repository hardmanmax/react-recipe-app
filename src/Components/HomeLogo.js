import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

const HomeLogo = () => {
  return (
    <Link 
      to={"/"} 
      style={{
        color: "black",
        display: "flex", 
        textDecoration: "none", 
        padding: "10px", 
        justifyContent: "center"
      }} 
    >
      <FontAwesomeIcon 
        icon={faCarrot}
        style={{height:"6vh"}}
      />
      <Typography 
        variant="h4"
        sx={{
          mx: "10px", 
          fontSize: "6vh"
        }}  
      >
        recipes.com
      </Typography>
    </Link>
  )
}

export default HomeLogo