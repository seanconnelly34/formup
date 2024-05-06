import Banner from './Banner';
import useFetchEntity from '@/hooks/useFetchEntity';
import Loader from '@/components/common/Loader';
import Paragraph from '@/components/common/Paragraph';
import Image from 'next/image';
import Cameras from '../../assets/cameras.svg';
import Plus from '../../assets/plus-white.svg';
import Button from '@/components/common/Button';

const Exhibyts = () => {
	const {
		entity: promotions,
		loading,
		renderPagination,
	} = useFetchEntity('promotions');

	return (
		<div className={'flex flex-col container relative h-full'}>
			{!!promotions ? (
				<>
					<div className={'flex flex-row justify-between'}>
						<div
							className={
								'text-[22px] text-white font-ralewayMed mt-6 mb-3'
							}
						>
							Our Products
						</div>
					</div>

					<div
						className={
							'grid gap-4 w-full grid-rows-2 overflow-x-auto grid-cols-2 min-h-[440px]'
						}
					>
						{loading ? (
							<Loader
								wrapperStyle={{
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						) : (
							promotions?.data?.map((promotion) => {
								return (
									<Banner
										key={promotion.id}
										title={
											<Paragraph
												type='white'
												className='sm:text-lg text-md'
											>
												{promotion.name}
											</Paragraph>
										}
										subtitle={
											<Paragraph
												type='white'
												weight='light'
												className='lg:text-[15px] lg:leading-6  text-[11px]'
											>
												{promotion.body}
											</Paragraph>
										}
										size={'small'}
										backgroundImage={promotion.media}
										href={promotion.link}
									/>
								);
							})
						)}
					</div>

					<div className={'flex flex-row justify-end mt-4'}>
						{renderPagination()}
					</div>
				</>
			) : (
				<div className='flex flex-1 flex-col justify-center items-center'>
					<div className='flex flex-col  mx-auto w-[70%] text-center items-center gap-3'>
						<Image
							src={Cameras}
							alt='Exhibyt NFT platform dashboard'
						/>
						<Paragraph type='white' size='lg' className='mt-4'>
							Oops! Nothing here
						</Paragraph>
						<Paragraph
							type='white'
							size='sm'
							className='leading-[24px]'
						>
							There are no exhibyts in your account.
							<br /> please click the button below and create your
							first exhibyt.
						</Paragraph>
						<div className='mt-4'>
							<Button icon={Plus}>Create Exhibyt</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Exhibyts;
