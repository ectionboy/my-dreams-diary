import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import { Suspense, lazy, useEffect } from "react";
import Profile from "./Profile/Profile";
import { useDispatch } from "react-redux";
import { refreshUserThunk } from "../redux/auth/authThunk";
import PublicRoute from "guards/PublicRoute/PublicRoute";
import PrivateRoute from "guards/PrivateRoute/PrivateRoute";
import Register from "./Register/Register";

const Login = lazy(() => import("./Login/Login"));
// const Favorites = lazy(() => import("./Favorites/Favorites"));


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(refreshUserThunk());
    };
    fetchData();
  }, [dispatch]);

  return (
    <Suspense fallback={"Loading....."}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<NotFound />} />      
      </Routes>
    </Suspense>
  );
};
