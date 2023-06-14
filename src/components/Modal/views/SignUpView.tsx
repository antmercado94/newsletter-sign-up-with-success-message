import { FC } from 'react';

import SignUpIllustration from '../../../assets/images/illustration-sign-up-mobile.svg'; // mobile
import styles from './modal-view.module.css';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';
import Icons from '../../Icons';
import Input from '../../Input';
import Button from '../../Button';

interface SignUpViewProps {}

const SignUpView: FC<SignUpViewProps> = ({}) => {
	return (
		<div className={styles.container}>
			<section>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.image}>
							<img src={SignUpIllustration} alt='Sign up illustration' />
						</div>
					</div>
					<div className={styles.content}>
						<Heading className={styles.heading}>Stay updated!</Heading>
						<Paragraph className={styles.paragraph}>
							Join 60,000+ product managers receiving monthly updates on:
						</Paragraph>
						<div className={styles.list}>
							<Paragraph icon={<Icons.List />}>
								Product discovery and building what matters
							</Paragraph>
							<Paragraph icon={<Icons.List />}>
								Measuring to ensure updates are a success
							</Paragraph>
							<Paragraph icon={<Icons.List />}>And much more!</Paragraph>
						</div>

						<div className={styles.end}>
							<Input
								className={styles.input}
								label='Email address'
								placeholder='email@company.com'
							/>
							<Button className={styles.btn}>
								Subscribe to monthly newsletter
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SignUpView;
