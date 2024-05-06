import useRouter from '@/hooks/useRouter';
import { DashboardRouting } from '@/utils/data';
import { useEffect, useState } from 'react';
import { ISidebarItem } from '@/types';

export const useActiveDashboardTab: () => {
	activeTab: ISidebarItem | undefined;
} = () => {
	// console.log('fuck');
	const { asPath } = useRouter({});
	const [activeTab, setActiveTab] = useState<ISidebarItem>();

	useEffect(() => {
		const foundRoute = DashboardRouting.find(
			(route) => route.url === asPath
		);
		// console.log('foundRoute', foundRoute);
		if (foundRoute) {
			setActiveTab(foundRoute);
		}
	}, [asPath]);

	return {
		activeTab,
	};
};
