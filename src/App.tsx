import Button from './components/Button';
import Heading from './components/Heading';
import Icons from './components/Icons';
import Input from './components/Input';
import Paragraph from './components/Paragraph';
import './style/style.css';

function App() {
	return (
		<>
			<div>
				<Heading>working??</Heading>
				<Icons.List />
				<Icons.Success />
				<Button>Test</Button>
				<Input placeholder='Email address' />
				<Paragraph>Testing</Paragraph>
			</div>
		</>
	);
}

export default App;
