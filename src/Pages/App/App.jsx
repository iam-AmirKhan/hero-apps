import React from "react";
import downImg from "../../assets/icon-downloads.png";
import ratImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";
const App = ({ singleApp }) => {
  const { image, title, downloads, ratingAvg, id } = singleApp;
  return (
    <Link to={`/AppDetails/${id}`}>
      <div className=" w-full max-w-[357px] h-[404px] shadow-lg gap-3 mt-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl bg-white">
        <img
          className="w-[285px] h-[285px] mx-auto rounded-t-xl"
          src={image}
          alt="image"
        />
        <h1 className=" ml-3 font-bold mt-2 mb-3">{title}</h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 p-3">
            <img src={downImg} alt="" className="h-4" />
            <p>{downloads}</p>
          </div>
          <div className="flex items-center gap-1 p-3">
            <img src={ratImg} alt="" className="h-4" />
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
