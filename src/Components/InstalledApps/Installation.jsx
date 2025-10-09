import React, { useState, useEffect } from "react";
import InstalledApps from "../InstalledApps/InstalledApps";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Installed Apps</h2>
      <p className="text-center text-gray-600 mb-20">Explore All Trending Apps on the Market developed by us</p>
      <InstalledApps installedApps={installedApps} handleUninstall={handleUninstall} />
    </div>
  );
};

export default Installation;
