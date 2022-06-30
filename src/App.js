import "./App.css";

function WelcomeMessage(){
  return <h3>Welcome to Red Sauce</h3>
}

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
        <WelcomeMessage />
        <p>Your personal Blog Post Application</p>

			</header>
		</div>
	);
}

export default App;
