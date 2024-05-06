import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '../common/Paragraph';

interface IGridItem {
	backgroundImage: string;
	href: string;
	title: string | ReactNode;
	subtitle: string | ReactNode;
}

const Banner = ({ backgroundImage, title, subtitle, href }: IGridItem) => {
	return (
		<Link href={href} target='_blank'>
			<div
				/* @ts-ignore */
				style={{
					backgroundImage: `url(${backgroundImage})`,
					// aspectRatio: '237/287',
					backgroundSize: 'cover',
				}}
				className='aspect-square relative hover:shadow-gridHover hover:border-4 hover:border-backgrounds-lightGrey'
			>
				<div className='collectionsGridOverlay absolute w-full h-full'></div>
				<div className='absolute bottom-4 px-4'>
					{title ? (
						<Paragraph
							type='white'
							className={'capitalize z-[1] mt-auto'}
						>
							{title}
						</Paragraph>
					) : null}

					{subtitle ? (
						<Paragraph
							type='white'
							className={'capitalize z-[1] text-[10px]'}
						>
							{subtitle}
						</Paragraph>
					) : null}
				</div>
			</div>
		</Link>
	);
};

export default Banner;
