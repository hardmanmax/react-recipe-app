import { Box } from "@mui/material";

const NewRecipeForm = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
  };

  return (
    <Box sx={style}>
      New Recipe Form
    </Box>
  )
}

export default NewRecipeForm