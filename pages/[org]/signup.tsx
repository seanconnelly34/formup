import SignUpContainer from '../../containers/signup';
import Head from 'next/head';

const SignUp = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Signup</title>
			<meta
				name='description'
				content='Signup for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<SignUpContainer />
	</div>
);
export default SignUp;
