import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { DarkContext } from "./context/DarkContext";
import { useState } from "react";

function App() {
	const dark = localStorage.getItem("darkMode");
	const [isDark, setIsDark] = useState(dark);

	return (
		<DarkContext.Provider value={{ isDark, setIsDark }}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</DarkContext.Provider>
	);
}

export default App;
