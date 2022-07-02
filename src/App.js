import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Blog from './components/Blog';

function App(){
	return(
		<Router>
			<Navigation />
				<div>
					<Routes>
						<Route exact path="/" element={<Home/>}  />
						<Route exact path="/about" element={<About/>} />
						<Route exact path="/blog" element={<Blog />} />
					</Routes>
				</div>

		</Router>
	)
}

export default App;
