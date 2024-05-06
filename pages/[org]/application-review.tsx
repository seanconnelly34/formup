import ApplicationReviewContainer from '../../containers/applicationReview';
import Head from 'next/head';

const ApplicationReview = () => (
	<div>
		<Head>
			<title>Momentable Exhibyt - Reviewing your application</title>
			<meta
				name='description'
				content='Get your application reviewed for Next Decentrum momentable NFT platform Exhibyt'
			/>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<ApplicationReviewContainer />
	</div>
);
export default ApplicationReview;
