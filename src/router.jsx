import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import  NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import AllReviews from "./components/AllReviews/AllReviews.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import AddReview from "./components/AddReview/AddReview.jsx";
import MyReviews from "./components/MyReviews/MyReviews.jsx";
import GameWatchList from "./components/GameWatchList/GameWatchList.jsx";
import ReviewDetails from "./components/ReviewDetails/ReviewDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/add-review",
        element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>,
      },
      {
        path: "/my-reviews",
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
      },
      {
        path: "/game-watchlist",
        element: <GameWatchList></GameWatchList>,
      },
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>
      }
    ],
  },
]);
export {router,RouterProvider};