const getFromFavorite = () => {
  const favorites = localStorage.getItem("favorites");

  if (favorites) return JSON.parse(favorites);
  return [];
};

const addToFavorite = (phone) => {
  const favorites = getFromFavorite();
  const isExist = favorites.find((p) => p.id === phone.id);

  if (isExist) console.log("Phone already exists");
  else favorites.push(phone);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFromFavorite = (id) => {
    const favorites = getFromFavorite();
    const remainingFavorites = favorites.filter(p => p.id !== id);
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites));
}

export { addToFavorite, getFromFavorite, removeFromFavorite };
