import { ISidebarItem } from '@/types';
import Icons from '@/components/common/Icons';
import Canvas from '@/containers/dashboard/Canvas';
import Profile from '@/containers/dashboard/Profile';
import Canvas2 from '@/containers/dashboard/Canvas2';
import Collections from '@/containers/dashboard/Collections';
import Exhibyts from '@/containers/dashboard/Exhibyts';
import Help from '@/containers/dashboard/Help';

export const DashboardRouting: ISidebarItem[] = [
	{
		title: 'Dashboard',
		url: '/',
		icon: Icons.DashboardAccount,
		container: <Canvas2 />,
	},
	// {
	// 	title: 'Profile',
	// 	url: '/user/dashboard/profile',
	// 	icon: Icons.DashboardAccount,
	// 	container: <Canvas2 />,
	// },
	{
		title: 'Create Forms',
		url: '/user/dashboard/create-forms',
		icon: Icons.DashboardAccount,
		container: <Canvas2 />,
	},
	{
		title: 'Collections',
		url: '/user/dashboard/collections',
		icon: Icons.DashboardAccount,
		container: <Collections />,
	},
	{
		title: 'Exhibyts',
		url: '/user/dashboard/exhibyts',
		icon: Icons.DashboardAccount,
		container: <Exhibyts />,
	},
	{
		title: 'Help',
		url: '/user/dashboard/help',
		icon: Icons.DashboardAccount,
		container: <Help />,
	},
];
