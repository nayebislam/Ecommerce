import { createBrowserRouter } from "react-router";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";
import Cart from "../../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "product/:id", Component: ProductDetails },
      { path: "cart", Component: Cart },
    ],
  },
]);

export default router;