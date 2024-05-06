import EmailVerifiedContainer from '../../containers/verifyEmail/EmailVerified';
import Head from 'next/head';

const VerifyEmail = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Email Verification</title>
			<meta
				name='description'
				content='Email Verification for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<EmailVerifiedContainer />
	</div>
);
export default VerifyEmail;
