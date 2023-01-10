import "./App.css";
import Navigation from "./components/Navigation";
import HomepageLoggedIn from "./pages/HomepageLoggedIn";
import HomepageLoggedOut from "./pages/HomepageLoggedOut";
import MyPetsPage from "./pages/MyPetsPage";
import PetPage from "./pages/PetPage";
import ProfileSettings from "./pages/ProfileSettings";
import SearchPage from "./pages/SearchPage";
import AddPet from "./pages/Admin/AddPet";
import Dashboard from "./pages/Admin/Dashboard";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);

  const router = createBrowserRouter([
    {
      element: (
        <>
          <Navigation />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: user ? (
            <Navigate replace to={"/HomepageLoggedIn"} />
          ) : (
            <Navigate replace to={"/HomepageLoggedOut"} />
          ),
        },
        {
          path: "/HomepageLoggedOut",
          element: <HomepageLoggedOut />,
        },
        {
          path: "/HomepageLoggedIn",
          element: <HomepageLoggedIn />,
        },
        {
          path: "/ProfileSettings",
          element: <ProfileSettings />,
        },
        {
          path: "/SearchPage",
          element: <SearchPage />,
        },
        {
          path: "/MyPetsPage",
          element: <MyPetsPage />,
        },
        {
          path: "/PetPage/:petId",
          element: <PetPage />,
        },

        {
          path: "/Admin/AddPet",
          element: <AddPet />,
        },
        {
          path: "/Admin/Dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
