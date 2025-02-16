import { Outlet } from "react-router-dom";
import Copyright from "./components/Footer/Copyright";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggole/ThemeToggle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <nav className=" bg-green-700 text-white ">
        <Navbar></Navbar>
      </nav>
      <main className="container mx-auto">
      <Outlet></Outlet>
      </main>
      <footer className="bg-green-700 text-white">
        <Footer></Footer>
        <Copyright></Copyright>
      </footer>
    </>
  );
}
