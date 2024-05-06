import LoginContainer from '@/containers/login';
import Head from 'next/head';

const Login = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt Login</title>
			<meta
				name='description'
				content='Login for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<LoginContainer />
	</div>
);
export default Login;
