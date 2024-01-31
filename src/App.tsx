import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

{
  /* MAIN WEBSITE */
}
import Header from "./cmp/Header.tsx";
import Home from "./cmp/Home.tsx";
import About from "./cmp/About.tsx";
import Design from "./cmp/Design.tsx";
import EiProMockup from "./cmp/case/eipromockup.tsx";
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
          <Route path="/eipromockup" element={<EiProMockup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
