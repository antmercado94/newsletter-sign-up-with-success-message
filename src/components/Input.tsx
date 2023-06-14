import { HTMLAttributes, forwardRef } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	label?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, children, label, ...props }, ref) => {
		return label ? (
			<label className={className}>
				{label}
				<input ref={ref} {...props}>
					{children}
				</input>
			</label>
		) : (
			<input className={className} ref={ref} {...props}>
				{children}
			</input>
		);
	}
);
Input.displayName = 'Input';

export default Input;
