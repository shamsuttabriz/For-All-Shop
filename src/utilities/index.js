// Localstorage of Fovorates
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


// Localstorage of Cart
const getFromCart = () => {
  const carts = localStorage.getItem("carts");

  if (carts) return JSON.parse(carts);
  return [];
};

const addToCart= (phone) => {
  const carts = getFromCart();
  const isExist = carts.find((p) => p.id === phone.id);

  if (isExist) console.log("Phone already exists");
  else carts.push(phone);

  localStorage.setItem("carts", JSON.stringify(carts));
};

const removeFromCart = (id) => {
    const carts = getFromCart();
    const remainingCarts = carts.filter(p => p.id !== id);
    localStorage.setItem('carts', JSON.stringify(remainingCarts));
}

export { addToFavorite, getFromFavorite, removeFromFavorite, addToCart, getFromCart, removeFromCart };
