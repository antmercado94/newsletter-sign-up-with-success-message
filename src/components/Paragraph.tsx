import { HTMLAttributes, forwardRef } from 'react';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ className, children, ...props }, ref) => {
		return (
			<p className={className} ref={ref} {...props}>
				{children}
			</p>
		);
	}
);
Paragraph.displayName = 'Paragraph';

export default Paragraph;
