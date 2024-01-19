import { BrowserRouter, Routes, Route } from "react-router-dom";

{
  /* MAIN WEBSITE */
}
import Header from "./cmp/Header.tsx";
import Home from "./cmp/Home.tsx";
import About from "./cmp/About.tsx";
import Design from "./cmp/Design.tsx";
import Footer from "./cmp/Footer.tsx";

{
  /* CASE STUDIES */
}
import Marmonoir from "./cmp/case/marmonoir.tsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* MAIN WEBSITE */}
          <Route path="/" element={<Home />} />
          <Route path="/abt" element={<About />} />
          <Route path="/des" element={<Design />} />
          {/* CASE STUDIES */}
          <Route path="/marmonoir" element={<Marmonoir />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
