import ForgotPasswordContainer from '../../containers/forgotPassword';
import Head from 'next/head';

const ForgotPassword = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Forgot Password</title>
			<meta
				name='description'
				content='Forgot Password for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<ForgotPasswordContainer />
	</div>
);
export default ForgotPassword;
