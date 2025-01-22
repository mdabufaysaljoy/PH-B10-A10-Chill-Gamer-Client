import { Outlet } from "react-router-dom";
import Copyright from "./components/Footer/Copyright";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggole/ThemeToggle";

export default function App() {
  return (
    <>
      <nav className=" bg-cyan-300 ">
        <Navbar></Navbar>
      </nav>
      <main>
      <Outlet></Outlet>
      </main>
      <footer className="bg-cyan-300">
        <Footer></Footer>
        <Copyright></Copyright>
      </footer>
    </>
  );
}
