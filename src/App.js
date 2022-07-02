import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App(){
	return(
		<Router>
			<Navigation />
				<div>
					<Routes>
						<Route exact path="/home" element={<Home/>}  />
					</Routes>
				</div>
		</Router>
	)
}

export default App;
