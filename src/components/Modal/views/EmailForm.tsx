import { FC, FormEvent, Ref, useContext, useRef, useState } from 'react';
import Input from '../../Input';
import Button from '../../Button';
import styles from './modal-view.module.css';
import { ModalContext } from '../context/ModalContext';

const EmailForm: FC = ({}) => {
	const inputRef = useRef<HTMLInputElement>();
	const { setIsSuccess } = useContext(ModalContext);
	const [error, setError] = useState<string>('');

	const submitEmail = (e: FormEvent) => {
		e.preventDefault();
		const inputVal = inputRef.current?.value;
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

		// email validation
		if (!!inputVal?.match(emailRegex) === false) {
			setError('Valid email required');
			return;
		}
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
