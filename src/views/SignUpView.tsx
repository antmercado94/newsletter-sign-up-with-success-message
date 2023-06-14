import { FC } from 'react';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Input from '../components/Input';
import Button from '../components/Button';
import SignUpIllustration from '../assets/images/illustration-sign-up-mobile.svg'; // mobile
import styles from './sign-up-view.module.css';
import Icons from '../components/Icons';

interface SignUpViewProps {}

const SignUpView: FC<SignUpViewProps> = ({}) => {
	return (
		<div className={styles.container}>
			{/* image */}
			<section>
				<div className={styles.image}>
					<img src={SignUpIllustration} alt='Sign up illustration' />
				</div>
			</section>
			{/* content */}
			<section>
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
					<Input
						className={styles.input}
						label='Email address'
						placeholder='email@company.com'
					/>
					<Button>Subscribe to monthly newsletter</Button>
				</div>
			</section>
		</div>
	);
};

export default SignUpView;
