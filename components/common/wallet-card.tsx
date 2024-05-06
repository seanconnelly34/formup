import Image from 'next/image';
import { IWalletCard } from '@/types';

const WalletCard = ({ image, address, name, children }: IWalletCard) => {
	return (
		<div className='relative w-full'>
			<div className='flex space-x-4'>
				<div className='flex-shrink-0'>
					<Image src={image} alt='Blocto Logo' />
				</div>
				<div className='flex-1 min-w-0'>
					<p className='text-sm font-medium text-[#A0A0A0] truncate'>
						{name}
					</p>
					<p className='text-sm text-gray-500 truncate dark:text-gray-400'>
						{address}
					</p>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default WalletCard;
