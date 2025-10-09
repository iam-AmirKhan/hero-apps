import React, { useState, useEffect } from "react";
import InstalledApps from "../InstalledApps/InstalledApps";
import { ToastContainer } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  const sortedApps = [...installedApps];
  if (sortBy === "downloadsAsc") sortedApps.sort((a, b) => a.downloads - b.downloads);
  else if (sortBy === "downloadsDesc") sortedApps.sort((a, b) => b.downloads - a.downloads);

  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">
        <ToastContainer position="top-right" />
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Installed Apps</h2>
      <p className="text-center text-gray-600 mb-20">Explore All Trending Apps on the Market developed by us</p>

       <div className="flex justify-end mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">Sort by Size</option>
          <option value="downloadsAsc"> Low-High ↑</option>
          <option value="downloadsDesc">High-Low ↓</option>
        </select>
      </div>
      <InstalledApps installedApps={sortedApps} handleUninstall={handleUninstall} />
    </div>
  );
};

export default Installation;
