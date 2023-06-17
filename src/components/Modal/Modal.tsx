import { useContext } from 'react';
import { ModalContext } from './context/ModalContext';
import styles from './modal.module.css';
import SignUpView from './views/SignUpView';
import SuccessView from './views/SuccessView';

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
