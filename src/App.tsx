import React from "react";
import Login from "./screens/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./screens/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
