import type { PropsWithChildren } from 'react';
import styles from './modal.module.css';

export const Modal = (props: PropsWithChildren) => {
	return (
		<main>
			<div className={styles.modal}>{props.children}</div>
		</main>
	);
};
