import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
