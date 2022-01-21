import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import {GlobalStyles} from "../Assets/GlobalStyles";
import HomaPage1 from "../Pages/HomePage1";
import GameDemo from "../Pages/Game/GameDemo";
import Roadmap from "../Pages/Roadmap";
import WhitePaper from "../Pages/WhitePaper";
import Game from "../Pages/Game";
import Game1 from "../Pages/Game1";
const App = () => {

	return (
		<>
		
		<GlobalStyles />	
		<Router>
			<Routes>
				<Route path="/" element={<HomaPage1 />}/>
				<Route path="/game_demo" element={<GameDemo />}/>
				<Route path="/roadmap" element={<Roadmap />} />
				<Route path="/whitepaper" element={<WhitePaper />} />
				<Route path="/game" element={<Game />} />
				<Route path="/game1" element={<Game1 />} />
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
