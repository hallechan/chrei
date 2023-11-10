import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu.tsx";
import Splash from "./components/splash.tsx";
import About from "./components/about.tsx";
import Projects from "./components/projects.tsx";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <div className="bg-[url('../public/assets/images/grunge.png')]">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
