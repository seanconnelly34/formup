import React, { ReactNode } from 'react';
import Image from 'next/image';
import Button from '../common/Button';

interface IProps {
	show: boolean;
	icon?: string | null;
	height?: string;
	color: 'bg-green-100' | 'bg-blue-200' | 'bg-red';
	message: string | ReactNode;
	onClose?: () => void;
	jsx?: boolean;
}
const SuccessBanner = ({
	show,
	icon = null,
	height = 'h-64px',
	color,
	message,
	onClose,
	jsx = false,
}: IProps) => {
	return (
		<div
			className={`w-full ${height} ${color} flex items-center p-6 mb-4 ${
				show ? '' : 'hidden'
			}`}
		>
			<>
				{icon && <Image src={icon} alt='Next Deecentrum Subcribe' />}
				{jsx ? (
					message
				) : (
					<p className='font-raleway text-black text-[16px] pl-5'>
						{message}
					</p>
				)}
				{!!onClose && (
					<Button
						type='primary'
						className='ml-auto font-ralewayBold text-black'
						onClick={() => onClose()}
					>
						x
					</Button>
				)}
			</>
		</div>
	);
};

export default SuccessBanner;
