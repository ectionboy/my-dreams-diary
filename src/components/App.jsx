import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import { Suspense } from "react";
import Login from "./Login/Login";

// const Catalog = lazy(() => import("./Catalog/Catalog"));
// const Favorites = lazy(() => import("./Favorites/Favorites"));


export const App = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchFavorites());
  // }, [dispatch]);

  return (
    <Suspense fallback={"Loading....."}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />      
      </Routes>
    </Suspense>
  );
};
