import Paragraph from '@/components/common/Paragraph';
import Image from 'next/image';
import Cameras from '../../assets/cameras.svg';
import Plus from '../../assets/plus-white.svg';
import Button from '../common/Button';

interface INoEntities {
	handleCreate: () => void;
}
const NoEntities = ({ handleCreate }: INoEntities) => {
	return (
		<div className='flex flex-1 flex-col justify-center items-center'>
			<div className='flex flex-col  mx-auto w-[70%] text-center items-center gap-3'>
				<Image src={Cameras} alt='Exhibyt NFT platform dashboard' />
				<Paragraph type='white' size='lg' className='mt-4'>
					Nothing here
				</Paragraph>
				<Paragraph type='white' size='sm' className='leading-[24px]'>
					There are no collections in your account.
					<br /> Click create button for your first collection.
				</Paragraph>
				<div className='mt-4'>
					<Button icon={Plus} onClick={handleCreate}>
						Create Collection
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NoEntities;
