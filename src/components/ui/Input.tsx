import { HTMLAttributes, forwardRef } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	label?: string | undefined;
	errMessage?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, children, label, errMessage, ...props }, ref) => {
		return (
			<label className={className}>
				<div>
					<span>{label && label}</span>
					<span>{errMessage && errMessage}</span>
				</div>
				<input className={errMessage ? 'error' : ''} ref={ref} {...props}>
					{children}
				</input>
			</label>
		);
	}
);
Input.displayName = 'Input';

export default Input;
