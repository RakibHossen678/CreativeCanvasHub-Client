import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="lg:w-11/12 mx-auto mt-3">
        <Header></Header>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default MainLayout;
