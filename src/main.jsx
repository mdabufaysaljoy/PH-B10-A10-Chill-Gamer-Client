import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {router,RouterProvider} from "./router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
