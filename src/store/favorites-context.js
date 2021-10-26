import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  total: 0
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
  };



  return <FavoritesContext.Provider value={context} />
  { props.children }

}

export default FavoritesContextProvider;