import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Tech from "./components/Tech/Tech";
import Works from "./components/Works/Work";
import Feedbacks from "./components/Feedback/FeedBack";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/Notfound/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "tech", element: <Tech /> },
      { path: "works", element: <Works /> },
      { path: "feedbacks", element: <Feedbacks /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;