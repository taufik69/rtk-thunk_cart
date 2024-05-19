import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import Prouduct from "./Component/Prouduct";

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
