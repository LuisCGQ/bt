import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Video from "./components/Video"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Video/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
