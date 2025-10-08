import React, { Suspense } from "react";
import App from "../app/App";

const Apps = ({ data, showAll }) => {
      const displayedApps = showAll ? data : data.slice(0, 8);

  return (
    <div>
      <h1 className="text-5xl mt-16 mb-6 font-bold text-center">Our All Applications</h1>
      <p className="mb-16 text-center text-gray-600">
       Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <Suspense fallback={<span>Loading...</span>}>
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 justify-center items-center mb-20 px-20">
          {displayedApps.map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
