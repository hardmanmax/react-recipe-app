import { Link } from "react-router-dom"
import Tooltip from "@mui/material/Tooltip"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const RecipePreview = ({recipe}) => {
  return (
    <Card>
      <Link 
        to={"/recipe/" + recipe.id}
        style={{
          textDecoration: "none",
          color: "black"
        }}
        >
        <CardMedia
          component="img"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent>
          <Tooltip title={recipe.title}>
            <Typography
              variant="h6" 
              sx={{
                whiteSpace: "nowrap", 
                overflow: "hidden", 
                textOverflow: "ellipsis"
              }}
            >
              {recipe.title}
            </Typography>
          </Tooltip>
        </CardContent>
      </Link>
    </Card>
  )
}

export default RecipePreview