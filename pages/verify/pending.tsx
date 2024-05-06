import VerifyEmailContainer from '@/containers/verifyEmail';
import Head from 'next/head';

const Pending = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Application Verification Pending</title>
			<meta
				name='description'
				content='Exhibyt Application Verification Pending for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<VerifyEmailContainer />
	</div>
);
export default Pending;
