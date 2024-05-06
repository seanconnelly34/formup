import Image from 'next/image';
import Logo from '@/assets/4mup-logo.svg';
import Paragraph from '../common/Paragraph';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const SignUpHeader = () => {
	const router = useRouter();

	const href = useMemo(() => {
		let href = '/signup';
		if (router.pathname === '/login' || router.pathname === '/signup') {
			href = '';
		}
		return href;
	}, [router.pathname]);

	return (
		<div
			className={`w-full h-[104px] flex flex-col justify-center ml-[-10px] mb-10 z-[1]`}
		>
			<Link href={href}>
				<Image
					src={Logo}
					alt='Momentable logo Next Decentrum'
					className='w-[113px]'
				></Image>
			</Link>
			<Paragraph
				weight='light'
				className='ml-4 text-[12px] text-black mt-[-7px]'
			>
				4mup
			</Paragraph>
		</div>
	);
};

export default SignUpHeader;
