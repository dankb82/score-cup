import card from "./joker.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={card} className="App-logo" alt="logo" />
				<p>Welcome to The Score Cup.</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Score Keeper
				</a>
			</header>
		</div>
	);
}

export default App;
