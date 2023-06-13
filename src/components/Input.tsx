import { HTMLAttributes, forwardRef } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, children, ...props }, ref) => {
		return (
			<input className={className} ref={ref} {...props}>
				{children}
			</input>
		);
	}
);
Input.displayName = 'Input';

export default Input;
