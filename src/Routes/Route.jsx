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
import Update from "../Components/Update";
import CategoryData from "../Components/CategoryData";
import CategoryDetails from "../Components/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment10-server-theta-dun.vercel.app/crafts"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <CraftDetials></CraftDetials>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment10-server-theta-dun.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("https://assignment10-server-theta-dun.vercel.app/crafts"),
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
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment10-server-theta-dun.vercel.app/crafts/${params.id}`),
      },

      {
        path: "/category/:name",
        element: <CategoryData></CategoryData>,
        loader: ({ params }) =>
          fetch(`https://assignment10-server-theta-dun.vercel.app/category/${params.name}`),
      },
      {
        path: "categories/:catItem",
        element: (
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment10-server-theta-dun.vercel.app/categories/${params.catItem}`),
      },
    ],
  },
]);

export default router;
