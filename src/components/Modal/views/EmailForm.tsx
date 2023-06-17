import { type FC, FormEvent, Ref, useContext, useRef, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import styles from './modal-view.module.css';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const EmailForm: FC = () => {
	const inputRef = useRef<HTMLInputElement>();
	const { setIsSuccess, setSuccessEmail } = useContext(ModalContext);
	const [error, setError] = useState<string>('');

	const submitEmail = (e: FormEvent) => {
		e.preventDefault();
		const inputVal = inputRef.current?.value;
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

		// email validation
		if (!!inputVal?.match(emailRegex) === false || !inputVal) {
			setError('Valid email required');
			return;
		}
		setSuccessEmail(inputVal);
		setIsSuccess(true);
	};

	return (
		<form onSubmit={submitEmail}>
			<Input
				className={styles.input}
				label='Email address'
				errMessage={error}
				placeholder='email@company.com'
				ref={inputRef as Ref<HTMLInputElement>}
			/>
			<Button className={styles.btn}>Subscribe to monthly newsletter</Button>
		</form>
	);
};

export default EmailForm;
