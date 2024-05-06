import DashboardHome from '@/assets/dashboard-home.svg';
import DashboardAccount from '@/assets/profile-icon.svg';
const Icons = {
	DashboardHome: () => (
		<div
			className={`bg-no-repeat h-full w-full`}
			style={{
				backgroundImage: `url(${DashboardHome.src})`,
			}}
		/>
	),
	DashboardAccount: () => (
		<div
			className={`bg-no-repeat h-full w-full`}
			style={{
				backgroundImage: `url(${DashboardAccount.src})`,
			}}
		/>
	),
};

export default Icons;
