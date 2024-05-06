import TermsOfServiceContainer from '@/containers/termsOfService';
import Head from 'next/head';

const TermsOfService = () => {
	return (
		<div>
			<Head>
				<title>Momentable Exhibyt Terms of Service</title>
				<meta
					name='description'
					content='Terms of Service for Next Decentrum momentable NFT platform Exhibyt service checkout our privacy policy'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<TermsOfServiceContainer />
		</div>
	);
};

export default TermsOfService;
