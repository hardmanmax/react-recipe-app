import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Recipe = () => {
  
  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("");

  let params = useParams();

  const getDetails = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    setDetails(data);
  }

  useEffect(() => {
    getDetails()
  }, [params.name]);

  return (
    <>
      <Grid>
        <Card sx={{padding: 2, maxWidth: "800px", marginX: "auto"}}>
          <Typography gutterBottom variant="h5">
            {details.title}
          </Typography>
          <CardMedia 
            component="img"
            image={details.image}
            alt={details.title}
            sx={{borderRadius: "5px"}}
          />
          <CardActions sx={{justifyContent: "space-evenly"}}>
            <Button
              className={activeTab === "Ingredients" ? "active" : ""}
              onClick={
                () => {
                  setActiveTab("Ingredients");
                }
              }
              size="large"
              sx={{
                color: "black",
                borderColor: "black",
                "&.hover": {
                  borderColor: "black",
                  backgroundColor: "#E3E3E3"
                }
              }}
            >
              Ingredients
            </Button>
            <Button
              className={activeTab === "Instructions" ? "active" : ""}
              onClick={
                () => {
                  setActiveTab("Instructions");
                }
              }
              size="large"
              sx={{
                color: "black",
                borderColor: "black",
                "&.hover": {
                  borderColor: "black",
                  backgroundColor: "#E3E3E3"
                }
              }}
            >Instructions</Button>
          </CardActions>

          {activeTab === "Instructions" && (
            <div style={{margin: "20px"}}>
                <Typography variant="p" dangerouslySetInnerHTML={{__html: details.instructions}}/>
            </div>
          )}

          {activeTab === "Ingredients" && (
              <div style={{margin: "20px"}}>
                <ul>
                  {
                    details.extendedIngredients.map((item) => (
                      <li key={item.id}>
                        <Typography variant="p">{item.original}</Typography>
                      </li>
                    ))
                  } 
                </ul>
              </div>
          )}


        </Card>

      </Grid>
    </>
  )
}

export default Recipe