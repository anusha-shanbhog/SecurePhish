import { Accordion } from "@mui/material";
import DrawerAppBar from "./components/DrawerAppBar";
import ControlledAccordions from "./components/AccordionComp";
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<DrawerAppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/scenarios" element={<ControlledAccordions />} />
					{/* Other routes */}
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
