import "./App.css";
import ContactForm from "./components/ContactForm";
import FeaturedProducts from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProducts/>
      <ContactForm/>
    </div>
  );
}

export default App;
