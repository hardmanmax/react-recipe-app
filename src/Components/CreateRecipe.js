import { Tooltip, Fab, Modal, Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import NewRecipeForm from './NewRecipeForm';

const CreateRecipe = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip 
        title="Add new recipe"
        sx={{
          position: "fixed",
          bottom: "2%",
          right: "2%"
        }}  
      >
        <Fab 
          variant="extended" 
          style={{height: 75, width: 75, borderRadius: "50%"}} 
          color="secondary" 
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon 
            sx={{fontSize: 40}}
          />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewRecipeForm />
      </Modal>
    </>
  )
}

export default CreateRecipe