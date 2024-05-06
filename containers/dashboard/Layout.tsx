import TopBar from '@/components/common/TopBar';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/4mup-logo.svg';
import Sidebar from '@/components/dashboard/Sidebar';
import { DashboardRouting } from '@/utils/data';
import { useActiveDashboardTab } from '@/hooks/useActiveDashboardTab';
// import useSession from '@/hooks/useSession';
import MobileNav from '@/components/dashboard/MobileNav';
import { useDispatch, useSelector } from '@/hooks/useRedux';
// import { setWalletModal } from '@/store/walletModalSlice';
import APIs from '@/services/api';
import SideNav from '@/components/dashboard/SideNav';
import SubNav from '@/components/dashboard/SubNav';
import { setCanvasForm } from '@/store/canvasFormSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownLong } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }: { children: React.ReactNode }) => {
	const { activeTab } = useActiveDashboardTab();

	return (
		<div className='relative transition-opacity'>
			<TopBar logo={Logo} background={'bg-backgrounds-primary'} />
			<MobileNav activeTab={activeTab} items={DashboardRouting} />

			<div
				className={
					'flex flex-row pt-[70px] min-h-screen max-h-[1200px]'
				}
			>
				<div
					className={
						'sm:block hidden w-[300px] border-r-[1px] border-secondary bg-white fixed h-full md:flex '
					}
				>
					{/* <Sidebar activeTab={activeTab} items={DashboardRouting} /> */}
					<SideNav />
					<SubNav />
				</div>

				<div
					className={
						'relative w-full bg-backgrounds-content font-ralewayLight pt-6 sm:pb-12 pb-32 sm:pt-12 px-5 ml-auto sm:w-[calc(100%-300px)]'
					}
				>
					{children}
					<div className='flex flex-col items-center justify-center p-1 text-center rounded-full fixed text-red-500 bg-gray-100 left-[62%] h-12 bottom-8 shadow-preview border-[1px] border-gray-100'>
						{/* <FontAwesomeIcon icon={faEye} className='w-5' /> */}
						<FontAwesomeIcon icon={faDownLong} className='w-3' />
						<p className='text-[8px] font-ralewayBold'>PREVIEW</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
