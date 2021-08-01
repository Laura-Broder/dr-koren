import "./normalize.css";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Testimonials />
				<Footer />
			</main>
		</div>
	);
}

export default App;
