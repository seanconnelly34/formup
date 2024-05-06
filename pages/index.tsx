import Layout from '@/containers/dashboard/Layout';
import { useActiveDashboardTab } from '@/hooks/useActiveDashboardTab';
import Head from 'next/head';

const DashboardPage = () => {
	const { activeTab } = useActiveDashboardTab();
	// console.log('------activeTab', activeTab);
	return (
		<div>
			<Head>
				<title>4mup - Dashboard</title>
				<meta
					name='description'
					content='Dashboard for Next Decentrum momentable NFT platform Exhibyt'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>{activeTab?.container}</Layout>
		</div>
	);
};

export default DashboardPage;
