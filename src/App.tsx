import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./cmp/Header.tsx";
import Home from "./cmp/Home.tsx";
import About from "./cmp/About.tsx";
import Footer from "./cmp/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abt" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
