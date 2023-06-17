import { type FC, useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import styles from './modal-view.module.css';
import Heading from '../../ui/Heading';
import Paragraph from '../../ui/Paragraph';
import Button from '../../ui/Button';
import Icons from '../../Icons';

const SuccessView: FC = () => {
	const { setIsSuccess } = useContext(ModalContext);

	return (
		<div className={styles.successContainer}>
			<section>
				<div className={styles.content}>
					<div className={styles.successWrapper}>
						<div className={styles.center}>
							<div className={styles.icon}>
								<Icons.Success />
							</div>
							<Heading className={styles.heading}>
								Thanks for subscribing!
							</Heading>
							<Paragraph className={styles.paragraph}>
								A confirmation email has been sent to{' '}
								<b>ash@loremcompany.com</b>. Please open it and click the button
								inside to confirm your subscription.
							</Paragraph>
						</div>
						<div className={styles.end}>
							<Button
								className={styles.btn}
								onClick={() => setIsSuccess(false)}
							>
								Dismiss message
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SuccessView;
