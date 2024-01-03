import React from "react";
import { createBrowserRouter, BrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Dish from "./components/Dish";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

export const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/menu",
        element: <Dish />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:dishId",
        element: <Dish />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
    errorElement: <Error />,
  },
]);
