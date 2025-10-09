import React, { useState, Suspense } from "react";
import App from "../app/App";
import notImg from "../../assets/App-Error.png";


const Apps = ({ data, showAll }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedApps = showAll ? filteredApps : filteredApps.slice(0, 8);

   
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-5xl mt-16 mb-6 font-bold text-center">
        Our All Applications
      </h1>
      <p className="mb-12 text-center text-gray-600">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>

      {showAll && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-gray-700 font-bold text-2xl">
            Apps Found:{" "}
            <span className="font-semibold">{filteredApps.length}</span>
          </p>

          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      )}

      <Suspense fallback={<span>Loading...</span>}>
        {displayedApps.length > 0 ? (
          <div className="gap-y-10 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
            {displayedApps.map((singleApp) => (
              <App key={singleApp.id} singleApp={singleApp} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
            <img src={notImg} alt="" className="mx-auto" />
            <h1 className="text-3xl font-bold text-center mt-4">
              OPPS!! APP NOT FOUND
            </h1>
            <p className="text-center text-gray-600 mt-2">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Apps;
