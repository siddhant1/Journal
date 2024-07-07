import React from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./screens/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
