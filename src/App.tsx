import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./cmp/Header.tsx";
import Home from "./cmp/Home.tsx";
import About from "./cmp/About.tsx";
import Design from "./cmp/Design.tsx";
import Footer from "./cmp/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abt" element={<About />} />
          <Route path="/des" element={<Design />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
