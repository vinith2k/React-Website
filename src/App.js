import Analytics from "./Component/Analytics";
import Cards from "./Component/Cards";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Newsletter from "./Component/Newsletter";
function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
