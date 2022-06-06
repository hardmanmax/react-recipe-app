import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Recipe = () => {
  
  const [details, setDetails] = useState({});

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
      {details.title}
    </>
  )
}

export default Recipe