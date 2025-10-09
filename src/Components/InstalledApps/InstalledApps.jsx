import React from "react";

const InstalledApps = ({ installedApps, handleUninstall }) => {
  if (installedApps.length === 0) 
    return <p className="text-center text-gray-500">No apps installed yet.</p>;

  return (
    <div className="grid md:grid-cols-1 gap-6">
      {installedApps.map((app) => (
        <div
          key={app.id}
          className="border rounded-xl p-4 shadow-sm flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              src={app.image}
              alt={app.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold text-lg">{app.title}</h4>
              <p className="text-sm text-gray-500">{app.companyName}</p>
            </div>
            <div>
                <p>{app.rating}</p>
                <p>{app.download}</p>
            </div>
          </div>

          <button
            onClick={() => handleUninstall(app.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default InstalledApps;
