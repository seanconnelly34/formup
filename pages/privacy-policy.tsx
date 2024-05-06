import PrivacyPolicyContainer from '@/containers/privacyPolicy';
import Head from 'next/head';

const PrivacyPolicy = () => {
	return (
		<div>
			<Head>
				<title>Momentable Exhibyt Privacy Policy</title>
				<meta
					name='description'
					content='Privacy Policy for Next Decentrum momentable NFT platform Exhibyt service checkout our privacy policy'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PrivacyPolicyContainer />
		</div>
	);
};

export default PrivacyPolicy;
