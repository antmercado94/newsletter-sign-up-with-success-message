import { FC } from 'react';
import SignUpIllustrationMobile from '../../../assets/images/illustration-sign-up-mobile.svg'; // mobile
import SignUpIllustrationDesk from '../../../assets/images/illustration-sign-up-desktop.svg'; // desktop
import styles from './modal-view.module.css';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';
import Icons from '../../Icons';
import EmailForm from './EmailForm';

interface SignUpViewProps {}

const SignUpView: FC<SignUpViewProps> = ({}) => {
	return (
		<div className={styles.signUpContainer}>
			<section>
				<div className={styles.signUpWrapper}>
					<div className={styles.top}>
						<div className={styles.image}>
							<picture>
								<source
									media='(min-width: 960px)'
									srcSet={SignUpIllustrationDesk}
								/>
								<img
									src={SignUpIllustrationMobile}
									alt='Sign up illustration'
								/>
							</picture>
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
						<div className={styles.endForm}>
							<EmailForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SignUpView;
