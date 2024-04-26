import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllCraft from "../Pages/AllCraft";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage";
import CraftDetials from "../Components/CraftDetials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/:id",
        element: <CraftDetials></CraftDetials>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("http://localhost:5000/crafts")
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/list",
        element: (
          <PrivateRoute>
            <MyCraft></MyCraft>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
