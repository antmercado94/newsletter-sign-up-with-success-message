import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<button className={className} ref={ref} {...props}>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';

export default Button;
