import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="lg:w-11/12 mx-auto mt-3">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
