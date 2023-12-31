import { type ButtonHTMLAttributes, forwardRef } from 'react';

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<button className={`${className} btn-default`} ref={ref} {...props}>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';

export default Button;
