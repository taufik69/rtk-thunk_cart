import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import Prouduct from "./Component/Prouduct";
import SingleProduct from "./Component/SingleProduct";
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
      {
        path: "/singleProduct/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
