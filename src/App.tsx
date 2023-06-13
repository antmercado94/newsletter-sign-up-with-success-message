import Button from './components/Button';
import Heading from './components/Heading';
import Icons from './components/Icons';
import './style/style.css';

function App() {
	return (
		<>
			<div>
				<Heading>working??</Heading>
				<Icons.List />
				<Icons.Success />
				<Button>Test</Button>
			</div>
		</>
	);
}

export default App;
