/* eslint-disable react/prop-types */
import fav from "../../assets/heart.svg";

const Favorite = ({ onShow }) => {
  return (
    <button
      onClick={onShow}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={fav} alt="" />
      <span>Favourite Locations</span>
    </button>
  );
};

export default Favorite;
