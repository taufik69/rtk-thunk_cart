import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import Prouduct from "./Component/Prouduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Prouduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
