import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Searchbar = () => {

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const inputHandler =(e) => {
    setInput(e.target.value);
  }

  const submitHandler =(e) => {
    e.preventDefault();
    navigate("/search/" + input)
    setInput("");
  }

  return (
    <Box
      sx={{
        display: "flex",
        felxDirection: "row",
        maxWidth: "800px",
        marginX: "auto",
        marginY: "25px"
      }}
      onSubmit={submitHandler}
      component="form"
    >
      <StyledTextField 
        fullWidth
        id="margin-normal"
        value = {input}
        label="Search Recipes" 
        type="search" 
        onChange={inputHandler} 
        sx={{
          '&onClick': {
            borderColor: '#000000',
          }
        }}
      />
    </Box>
  )
}

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #000000;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000;
    }
  }
`;

export default Searchbar