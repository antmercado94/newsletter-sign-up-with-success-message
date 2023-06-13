import { HTMLAttributes, forwardRef } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, children, ...props }, ref) => {
		return (
			<h1 className={className} ref={ref} {...props}>
				{children}
			</h1>
		);
	}
);
Heading.displayName = 'Heading';

export default Heading;
