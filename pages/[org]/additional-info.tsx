import SignUpAdditionalInfoContainer from '../../containers/signupAdditionalInfoContainer';
import Head from 'next/head';

const AdditionalInfo = () => (
	<div>
		<Head>
			<title>
				Momentable Exhibyt - Add your social media links - Signup
			</title>
			<meta
				name='description'
				content='Add your social media links to Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<SignUpAdditionalInfoContainer />
	</div>
);
export default AdditionalInfo;
