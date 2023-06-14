import { FC } from 'react';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import styles from './success-view.module.css';
import Icons from '../components/Icons';

interface SuccessViewProps {}

const SuccessView: FC<SuccessViewProps> = ({}) => {
	return (
		<div className={styles.container}>
			{/* content */}
			<section>
				<div className={styles.content}>
					<div className={styles.center}>
						<div className={styles.icon}>
							<Icons.Success />
						</div>
						<Heading className={styles.heading}>
							Thanks for subscribing!
						</Heading>
						<Paragraph className={styles.paragraph}>
							A confirmation email has been sent to <b>ash@loremcompany.com</b>.
							Please open it and click the button inside to confirm your
							subscription
						</Paragraph>
					</div>
					<div className={styles.end}>
						<Button className={styles.btn}>Dismiss message</Button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SuccessView;
