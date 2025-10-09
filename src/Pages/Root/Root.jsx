import Navbar from "../../Components/Header/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import GlobalLoader from "../Loading/GlobalLoader";
import { useEffect } from "react";
import { useLoading } from "../Loading/LoadingContext";

const Root = () => {
  const { setLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div>
      <GlobalLoader></GlobalLoader>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
