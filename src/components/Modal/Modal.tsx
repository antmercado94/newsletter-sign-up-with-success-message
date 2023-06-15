import { useContext } from 'react';
import styles from './modal.module.css';
import SignUpView from './views/SignUpView';
import SuccessView from './views/SuccessView';
import { ModalContext } from './context/ModalContext';

export const Modal = () => {
	const { isSuccess } = useContext(ModalContext);

	return (
		<main>
			<div className={styles.modal}>
				{!isSuccess ? <SignUpView /> : <SuccessView />}
			</div>
		</main>
	);
};
