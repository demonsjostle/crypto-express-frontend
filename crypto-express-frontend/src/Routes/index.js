import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import {GlobalStyles} from "../Assets/GlobalStyles";
import HomaPage1 from "../Pages/HomePage1";
import Game from "../Pages/Game";
import Roadmap from "../Pages/Roadmap";
import WhitePaper from "../Pages/WhitePaper";
const App = () => {

	return (
		<>
		
		<GlobalStyles />	
		<Router>
			<Routes>
				<Route path="/" element={<HomaPage1 />}/>
				<Route path="/game" element={<Game />}/>
				<Route path="/roadmap" element={<Roadmap />} />
				<Route path="/whitepaper" element={<WhitePaper />} />
			</Routes>
		</Router>
		</>
	)
}


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
		
);
