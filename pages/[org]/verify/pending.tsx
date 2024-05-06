import EmailVerify from '@/containers/verifyEmail';
import Head from 'next/head';

const VerifyEmail = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Email Verification</title>
			<meta
				name='description'
				content='Email Verification for Next Decentrum momentable NFT platform Exhibyt verify email'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<EmailVerify />
	</div>
);
export default VerifyEmail;
