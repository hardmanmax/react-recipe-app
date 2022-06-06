import { useContext, useEffect } from 'react'
import MyRecipesContext from '../../Context/MyRecipesContext'
import RecipePreview from '../RecipePreview';
// import { Splide, SplideSlide} from '@splidejs/react-splide'

const ManualRecipes = () => {

  const {myRecipes, setMyRecipes} = useContext(MyRecipesContext);

  useEffect(() => {
    setMyRecipes(myRecipes)
  },[myRecipes.length]);

  return (
    <>
    <p>Test</p>
    {
        myRecipes.map((recipe) => (
            <div style={{margin: "2px"}}>
              <RecipePreview recipe={recipe} />
            </div>
        ))
      }
    </>
  )
}

export default ManualRecipes