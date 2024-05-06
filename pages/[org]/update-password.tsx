import UpdatePasswordContainer from '../../containers/updatePassword';
import Head from 'next/head';

const ForgotPassword = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Update Password</title>
			<meta
				name='description'
				content='Update Password for Next Decentrum momentable NFT platform Exhibyt service checkout our privacy policy'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<UpdatePasswordContainer />
	</div>
);
export default ForgotPassword;
