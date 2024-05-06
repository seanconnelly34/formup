import Image from 'next/image';
import GearIcon from '../../assets/gear-icon.svg';
// import useSession from '@/hooks/useSession';

import { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Button from './Button';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import { setOpenLoginModal } from '@/store/loginModalSlice';
import Paragraph from './Paragraph';
import { useDetectClickOutside } from 'react-detect-click-outside';

interface ITopBarProps {
	background?: string;
	logo: string;
}

const TopBar = ({ background, logo }: ITopBarProps) => {
	const dispatch = useDispatch();
	const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
	const openLoginModal = useSelector((state) => state.loginModal.open);

	// const { logout } = useSession({});
	const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

	// const openLoginModal = () => {
	//
	// };

	const handleLoginModal = () => {
		setLoginModalOpen(!loginModalOpen);
	};

	const handleSettingsDrowdown = () => {
		setDropDownOpen(!dropDownOpen);
	};

	const closeOutsideClick = () => {
		setDropDownOpen(false);
	};

	const onLogoutClick = async () => {
		// await logout();
		closeOutsideClick();
	};

	const ref = useDetectClickOutside({
		onTriggered: closeOutsideClick,
		disableClick: !dropDownOpen,
	});
	const userWallet = 'sasdfcsdfcdefs';

	return (
		<>
			<div
				className={`z-30  border-b-[1px] border-gray-200 fixed flex flex-col w-full h-[70px] sm:justify-between sm:flex sm:align-middle sm:pl-[52px] pl-3 sm:pr-[52px] mr-3 ${background}`}
			>
				<div className='w-full flex items-center h-[70px]'>
					<Link href='/user/dashboard/home'>
						<Image
							src={logo}
							alt='4mup online forms'
							className='w-[90px]'
						/>
					</Link>
					<div
						className={
							'flex self-end ml-auto items-center sm:mr-0 mr-5 h-full'
						}
					>
						<div ref={ref} className='mt-[8px] flex'>
							<Button type='secondary' onClick={handleLoginModal}>
								Log in
							</Button>
							<Dropdown
								open={dropDownOpen}
								styles='right-0 top-[35px] border-grey border-1'
								trigger={
									<Image
										src={GearIcon}
										width={25}
										alt='Next Decentrum'
										onClick={handleSettingsDrowdown}
									/>
								}
							>
								<Button
									type='secondary'
									className='px-14 py-0 text-sm'
									onClick={onLogoutClick}
								>
									Logout
								</Button>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBar;
