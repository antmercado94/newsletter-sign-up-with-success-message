import { FC } from 'react';

import styles from './modal-view.module.css';
import Icons from '../../Icons';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';
import Button from '../../Button';

interface SuccessViewProps {}

const SuccessView: FC<SuccessViewProps> = ({}) => {
	return (
		<div className={styles.container}>
			{/* content */}
			<section>
				<div className={styles.content}>
					<div className={styles.wrapper}>
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
								inside to confirm your subscription
							</Paragraph>
						</div>
						<div className={styles.end}>
							<Button>Dismiss message</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SuccessView;
