import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritesMeetup) => { },
  removeFavorite: (meetupId) => { },
  itemIsFavorite: (meetupId) => { },
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritesMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritesMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function ItemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetup.Id);
  }


  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorites: removeFavoriteHandler,
    itemIsFavorite: ItemIsFavoriteHandler,


  };

  return <FavoritesContext.Provider value={context} />
  { props.children }

}

export default FavoritesContext;