import { Box, TextField, Modal } from "@mui/material";
import { useContext } from "react";

import MyRecipesContext from "../../Context/MyRecipesContext";

const NewRecipeForm = () => {
  
  const {addToListHandler, input, setInput, open, setOpen } = useContext(MyRecipesContext);

  const inputHandler =(e) => {
    setInput(e.target.value);
  };


  const handleClose = () => setOpen(false);


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={addToListHandler}>
        <TextField 
          onChange={inputHandler}
          label="Recipe Title"
          defaultValue=""
          value={input}
          />
      </Box>
    </Modal>
  )
}

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

export default NewRecipeForm