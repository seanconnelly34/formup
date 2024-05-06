import EmailVerified from '../../../containers/verifyEmail/EmailVerified';
import Head from 'next/head';

const VerifyIsEmail = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Email Verification</title>
			<meta
				name='description'
				content='Email Verification for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<EmailVerified />
	</div>
);
export default VerifyIsEmail;
