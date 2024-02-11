import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import redHeart from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../contex";

const AddToFav = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFav, setIsFav] = useState(false);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFav(found);
  }, []);

  function handleFavourites() {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFav(!isFav);
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFav ? redHeart : heart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFav;
