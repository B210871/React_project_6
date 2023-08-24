import { DashBoard } from "./pages/DashBoard/DashBoard";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Support } from "./pages/Support/Support";
import { Transactions } from "./pages/Transaction/Transactions";
const router = createBrowserRouter([
  {
    path: "/",
    element:<DashBoard/>
    ,
  },
  {
    path: "/transactions",
    element:<Transactions/>
    ,
  },
  {
    path: "/support",
    element:<Support/>
    ,
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
