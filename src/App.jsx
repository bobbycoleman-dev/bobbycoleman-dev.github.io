import Navbar from "./components/Navbar";
import About from "./views/About";
import Hero from "./views/Hero";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);

	return (
		<>
			<div>
				<div className="fixed w-full">
					<Navbar />
				</div>
				<Hero />
				<About />
			</div>
		</>
	);
}

export default App;
