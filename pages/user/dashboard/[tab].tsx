import Layout from '@/containers/dashboard/Layout';
import { useActiveDashboardTab } from '@/hooks/useActiveDashboardTab';
import Head from 'next/head';

const DashboardPage = () => {
	const { activeTab } = useActiveDashboardTab();
	return (
		<div>
			<Head>
				<title>Momentable Exhibyt - Dashboard</title>
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
