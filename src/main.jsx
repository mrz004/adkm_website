import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home.jsx";
import DirectorMessage from "./components/messages/DirectorMessage";
import FounderMessage from "./components/messages/FounderMessage";
import SecretaryMessage from "./components/messages/SecretaryMessage";
import HigherSecondarySection from "./components/sections/HigherSecondarySection";
import PrimarySection from "./components/sections/PrimarySection";
import SecondarySection from "./components/sections/SecondarySection";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "messages",
        children: [
          {
            path: "founder",
            element: <FounderMessage />,
          },
          {
            path: "secretary",
            element: <SecretaryMessage />,
          },
          {
            path: "director",
            element: <DirectorMessage />,
          },
        ],
      },
      {
        path: "sections",
        children: [
          {
            path: "primary",
            element: <PrimarySection />,
          },
          {
            path: "secondary",
            element: <SecondarySection />,
          },
          {
            path: "higher-secondary",
            element: <HigherSecondarySection />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
