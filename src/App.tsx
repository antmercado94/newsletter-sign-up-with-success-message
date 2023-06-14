import SignUpView from './views/SignUpView';
import { Modal } from './components/Modal';
import './style/style.css';
import SuccessView from './views/SuccessView';

function App() {
	return (
		<Modal>
			{/* <SignUpView /> */}
			<SuccessView />
		</Modal>
	);
}

export default App;
