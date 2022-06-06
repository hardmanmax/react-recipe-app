import { createContext, useState } from "react";

export const MyRecipesContext = createContext({
  myRecipes: [],
  setMyRecipes: () => {},
  addToListHandler: () => {},
  input: "",
  setinput: () => {},
  setOpen: () => {},
  open: (false)
});

export const MyRecipesProvider = ({children}) => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const addToListHandler = (e) => {
    e.preventDefault();
    setInput("");
    setMyRecipes([
      ...myRecipes,
      {title: input}
    ]);
    setOpen(false);
  };

  const value = {
    myRecipes,
    setMyRecipes,
    addToListHandler,
    input, 
    setInput,
    setOpen,
    open
  }

  return <MyRecipesContext.Provider value={value}>
    {children}
  </MyRecipesContext.Provider>

}

export default MyRecipesContext