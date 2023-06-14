import { Modal } from './components/Modal/Modal';
import SignUpView from './components/Modal/views/SignUpView';
import SuccessView from './components/Modal/views/SuccessView';
import './style/style.css';

function App() {
	return (
		<Modal>
			{/* <SignUpView /> */}
			<SuccessView />
		</Modal>
	);
}

export default App;
