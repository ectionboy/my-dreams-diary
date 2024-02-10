import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import { Suspense, useEffect } from "react";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import { useDispatch } from "react-redux";
import { refreshUserThunk } from "../redux/auth/authThunk";
import PublicRoute from "guards/PublicRoute/PublicRoute";

// const Catalog = lazy(() => import("./Catalog/Catalog"));
// const Favorites = lazy(() => import("./Favorites/Favorites"));


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={"Loading....."}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />      
      </Routes>
    </Suspense>
  );
};
