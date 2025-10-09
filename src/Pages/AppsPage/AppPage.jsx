import React from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";

const AppPage = () => {
  const data = useLoaderData();
  return (
    <div className="mt-10">
      <Apps data={data} showAll={true} />
    </div>
  );
};

export default AppPage;
