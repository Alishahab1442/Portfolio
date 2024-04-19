import Navbar from "./component/Navbar/Navbar";
import Intro from "./component/Intro/Intro";
import Skill from "./component/Skill/Skill";
import Works from "./component/Works/Works";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
