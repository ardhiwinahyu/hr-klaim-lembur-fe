import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, NavLink, Outlet, useParams, Routes } from "react-router-dom";
import OvertimeForm from "./OvertimeForm";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
			{/* <OvertimeForm /> */}
			<p>Helo</p>
		</div>
	);
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<App />} />
			<Route path="/overtime" element={<OvertimeForm />} />
		</>
	)
);

export default App;
