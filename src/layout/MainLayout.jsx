import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import DotsOverlay from "../components/DotsOverlay";
import Footer from "../components/Footer";
import Cart from '../pages/Cart'

function MainLayout() {
  return (
    <>
      <ScrollProgress />
      <DotsOverlay />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
