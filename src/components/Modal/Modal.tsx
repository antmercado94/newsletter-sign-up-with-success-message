import type { PropsWithChildren } from 'react';

export const Modal = (props: PropsWithChildren) => {
	return (
		<main>
			<div className='flex'>{props.children}</div>
		</main>
	);
};
