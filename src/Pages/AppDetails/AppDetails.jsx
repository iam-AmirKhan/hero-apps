import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer,toast } from "react-toastify";
import downImg from '../../assets/icon-downloads.png';
import ratImg from '../../assets/icon-ratings.png';
import rivImg from '../../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find((app) => app.id === appId);
  const { image, title, ratingAvg, downloads, reviews, companyName, ratings , description } =
    singleApp || {};


  const [installed, setInstalled] = useState(false);
   const [installedApps, setInstalledApps] = useState([]);

   useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(storedApps);

    if (storedApps.some((app) => app.id === appId)) {
      setInstalled(true);
    }
  }, [appId]);

  const handleInstall = () => {
    setInstalled(true);
    toast(`${title} installed successfully!`);

     const updated = [...installedApps, singleApp];
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  

  };

  if (!singleApp) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        App not found !
      </div>
    );
  }

  const ratingData = ratings || [];

  const colors = ["#F44336", "#FF9800", "#FFC107", "#8BC34A", "#4CAF50"];

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

<div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-start mb-4">
          Ratings
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={ratingData}
            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" radius={[6, 6, 6, 6]}>
              {ratingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
<div>
  <h1 className="font-bold mt-15">Description</h1>
    <p className="mt-6 text-gray-600 leading-relaxed text-justify border-t pt-4">
    {description}
  </p>
</div>

    </div>
  );
};

export default AppDetails;