import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import Specials from "./components/sections/Specials";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <div id="reservations">
          <BookingForm />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
