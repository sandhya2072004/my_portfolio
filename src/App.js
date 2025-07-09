import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Homescreen from "./screens/Homescreen";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import Skills from "./screens/Skills";
import ScrollToTop from "./components/ScrollToTop";
// import ThemeContext from "./components/ThemeContext";
import CustomThemeProvider from "./ThemeContext";



function App() {
  return (
    // <BrowserRouter>
    //   <ScrollToTop />

    //   <Routes>
    //     {/* Layout route - Home contains the Navbar and Outlet */}
    //     <Route path="/" element={<Home />}>
    //       {/* Default route - shown at root */}
    //       <Route index element={<Homescreen />} />

    //       {/* Other nested routes inside the layout */}
    //       {/* <Route path="homescreen" element={<Homescreen />} /> */}
    //       <Route path="about" element={<About />} />
    //       <Route path="projects" element={<Projects />} />
    //       <Route path="experience" element={<Experience />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="skills" element={<Skills />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    //   <ScrollToTop />

    //   <Routes>
    //     {/* Layout route - Home contains the Navbar and Outlet */}
    //     <Route path="/" element={<Home />}>
    //       // <Route index element={<Homescreen />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <CustomThemeProvider>
      <Home />
    </CustomThemeProvider>
  );
}

export default App;
