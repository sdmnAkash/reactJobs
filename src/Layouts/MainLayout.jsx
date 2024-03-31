import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer autoClose={2000} theme="dark" transition:Zoom />
    </>
  );
};
export default mainLayout;
