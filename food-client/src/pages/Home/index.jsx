import Carousel from "../../components/Carousel";
import LeaderBoard from "../../components/LeaderBoard";
import About from "../../components/About";
import ProductsPreview from "../../components/ProductsPreview";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LeaderBoard />
      <ProductsPreview />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
