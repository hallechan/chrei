import Menu from "./components/menu.tsx";
import Splash from "./components/splash.tsx";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <div className="bg-[url('assets/images/grunge.png')]">
      <Menu />
      <Splash />
      <Footer />
    </div>
  );
}

export default App;
