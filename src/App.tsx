import { Modal } from './components/Modal/Modal';
import ModalContextProvider from './components/Modal/context/ModalContext';
import './style/style.css';

function App() {
	return (
		<ModalContextProvider>
			<Modal />
		</ModalContextProvider>
	);
}

export default App;
