import {  RouterProvider } from "react-router";
import router from "./components/Router/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
