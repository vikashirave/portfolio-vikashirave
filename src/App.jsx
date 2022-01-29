import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Work"
import Testimonial from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="app">
     <Topbar />
     <div className="sections">
     <Intro />
     <Portfolio />
     <Works />
     <Testimonial />
     <Contact />
     </div>
    </div>
  );
}

export default App;