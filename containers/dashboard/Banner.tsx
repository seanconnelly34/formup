import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sizes = {
	small: {
		height: 'lg:h-[207px] h-[242px]',
		width: 'col-span-6',
	},
	medium: {
		height: 'h-[173px]',
		width: 'w-full',
	},
};

interface IDefaultBannerProps {
	size: 'small' | 'medium';
	button?: ReactNode;
	logo?: string;
	title?: string | ReactNode;
	subtitle?: string | ReactNode;
	content?: string | ReactNode;
	href: string;
}

interface ISmallBanner extends IDefaultBannerProps {
	size: 'small';
	backgroundImage: string;
	logo?: string;
	title: string | ReactNode;
	subtitle: string | ReactNode;
}

interface IMediumBanner extends IDefaultBannerProps {
	size: 'medium';
	backgroundImage: string;
	content: string | ReactNode;
	button: ReactNode;
	href: string;
}

declare type IBannerProps = ISmallBanner | IMediumBanner;

const Banner = ({
	size,
	backgroundImage,
	logo,
	title,
	subtitle,
	button,
	href,
	content,
}: IBannerProps) => {
	if (size === 'small') {
		if (content)
			throw new Error(
				'Invalid small banner props, please check ISmallBanner'
			);
	} else if (size === 'medium') {
		if (title)
			throw new Error(
				'Invalid medium banner props, please check IMediumBanner'
			);
	}
	return (
		<Link href={href} target='_blank'>
			<div
				/* @ts-ignore */
				style={{ backgroundImage: `url(${backgroundImage})` }}
				className={`w-full ${Sizes[size].width} ${Sizes[size].height} flex flex-col p-4 relative font-ralewayMed after:content after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-[0.3] after:z-0 bg-no-repeat bg-cover bg-center`}
			>
				{logo ? (
					<Image
						className={'z-[1] mb-auto ml-auto'}
						src={logo}
						alt='4mup online forms'
						width={100}
					/>
				) : null}
				{title ? (
					<div className={'capitalize z-[1] mt-auto'}>{title}</div>
				) : null}

				{subtitle ? (
					<div className={'capitalize z-[1]'}>{subtitle}</div>
				) : null}
				{content ? <div className={'z-[1]'}>{content}</div> : null}

				{button || null}
			</div>
		</Link>
	);
};

export default Banner;
