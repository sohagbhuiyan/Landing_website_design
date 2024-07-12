import ParentBanner from "./components/board/ParentBanner";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Footerprev from "./components/footer/Footerprev";
import Home from "./components/hero/Home";
import Meet from "./components/meet/Meet";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <ParentBanner />
      <Meet />
      <Card />
      <Footerprev />
      <Footer />
    </div>
  );
}

export default App;
