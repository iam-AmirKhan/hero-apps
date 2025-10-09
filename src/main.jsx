import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import { LoadingProvider } from "./Pages/Loading/LoadingContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
  <LoadingProvider>
    <Suspense fallback={<div>loading...</div>}>
<RouterProvider router={router}

/>
</Suspense>
  </LoadingProvider>
  </StrictMode>
);
