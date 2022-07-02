import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App(){
	return(
		<Router>
			<Navigation />
				<div>
					<Routes>
						<Route exact path="/home" element={<Home/>}  />
						<Route exact path="/about" element={<About/>} />
					</Routes>
				</div>

		</Router>
	)
}

export default App;
