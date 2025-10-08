import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer,toast } from "react-toastify";
import downImg from '../../assets/icon-downloads.png'
import ratImg from '../../assets/icon-ratings.png';
import rivImg from '../../assets/icon-review.png'
const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find((app) => app.id === appId);
  const { image, title, ratingAvg, downloads, reviews, companyName } =
    singleApp || {};

  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast(`${title} installed successfully!`);
  };

  if (!singleApp) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        App not found !
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">
      <ToastContainer position="top-center" reverseOrder={false} />

 

      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-8 gap-8">
        
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-[320px] object-cover rounded-xl shadow-md"
          />
        </div>

       
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">{title}</h2>
       <div className="flex gap-3">
          <p className="text-gray-400">Developed by</p><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">{companyName}</span>

       </div>
          <div className=" flex gap-8 items-center mt-4 text-gray-700 justify-center">
            <div>
            <img src={ratImg} alt="" />
             Rating
             <p className="text-2xl font-bold">{ratingAvg}</p>
             </div>
            <div> <img src={downImg} alt="" /> Downloads 
           <p className="text-2xl font-bold">{downloads}</p>
            </div>
            <div> <img src={rivImg} alt="" /> Reviews 
            <p className="text-2xl font-bold">{reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 py-3 px-6 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:scale-105 text-white"
            }`}
          >
            {installed ? "Installed" : "Install Now"}
          </button>
           <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
