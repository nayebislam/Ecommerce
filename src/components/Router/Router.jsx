import { createBrowserRouter } from "react-router";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import Products from "../../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
    ],
  },
]);

export default router;