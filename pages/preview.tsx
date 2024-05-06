import Image from 'next/image';
import NotFound from '../assets/404.svg';
import Paragraph from '@/components/common/Paragraph';
import Head from 'next/head';

const Preview = () => {
	return (
		<div className='flex justify-center h-screen items-center'>
			<Head>
				<title>Momentable Subscription - 404</title>
			</Head>
			<div className='w-[500px] px-8 text-center '>
				<Image
					width={100}
					className='m-auto mb-6'
					src={NotFound}
					alt='Next Decentrum'
				/>
				<h1 className='text-[26px] mb-1'>HEADING</h1>
				<Paragraph
					type='base'
					weight='light'
					size='md'
					className='leading-[32px]'
				>
					The account credentials you used to sign in aren’t
					authorized to access this website. Make sure you’re using
					the right account and that you have correct permissions
				</Paragraph>
			</div>
		</div>
	);
};

export default Preview;
