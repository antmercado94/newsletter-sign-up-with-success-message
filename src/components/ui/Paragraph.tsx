import { HTMLAttributes, forwardRef } from 'react';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	icon?: React.SVGProps<SVGSVGElement> | undefined;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ className, children, icon, ...props }, ref) => {
		return icon ? (
			<span>
				<>{icon}</>
				<p className={className} ref={ref} {...props}>
					{children}
				</p>
			</span>
		) : (
			<p className={className} ref={ref} {...props}>
				{children}
			</p>
		);
	}
);
Paragraph.displayName = 'Paragraph';

export default Paragraph;
