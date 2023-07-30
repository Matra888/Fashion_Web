import { Outlet } from "react-router-dom";
import "../../layouts/MainLayout/MainLayout.css";

const NotFound = () => {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
};

export default NotFound;
