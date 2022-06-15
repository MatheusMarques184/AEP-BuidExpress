import GlobalStyle from './styles/GlobalStyle';
import Display from './components/Display/Display';
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	return (
		<div className="App">
      <GlobalStyle/>
      <Display/>
		</div>
	);
}

export default App;
