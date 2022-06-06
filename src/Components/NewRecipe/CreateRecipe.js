import { Tooltip, Fab} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import NewRecipeForm from './NewRecipeForm';
import MyRecipesContext from '../../Context/MyRecipesContext';
import { useContext } from 'react';

const CreateRecipe = () => {

  const {setOpen} = useContext(MyRecipesContext);

  const handleOpen = () => setOpen(true);

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
      <NewRecipeForm />
    </>
  )
}

export default CreateRecipe