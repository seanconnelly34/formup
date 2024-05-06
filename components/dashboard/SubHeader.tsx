import Paragraph from '../common/Paragraph';
import Image from 'next/image';
import Button from '../common/Button';
import Plus from '../../assets/plus-white.svg';

interface ISubHeader {
	title: string;
	listIconSelected?: any;
	gridIconSelected?: any;
	handleChangeLayout?: () => void;
	handleCreate?: () => void;
}

const SubHeader = ({
	title,
	listIconSelected,
	gridIconSelected,
	handleChangeLayout,
	handleCreate,
}: ISubHeader) => {
	return (
		<div className={'flex flex-row mb-3'}>
			<Paragraph
				type='white'
				className='text-[24px] h-[50px] items-center flex'
			>
				{title}
			</Paragraph>
			{listIconSelected && gridIconSelected && (
				<div className='flex bg-[#090C10] flex-end ml-auto gap-5 p-[15px]'>
					<Image
						src={listIconSelected}
						alt='list'
						onClick={handleChangeLayout}
					/>
					<Image
						src={gridIconSelected}
						alt='grid'
						onClick={handleChangeLayout}
					/>
				</div>
			)}
			{handleCreate && (
				<div className='ml-4'>
					<Button
						icon={Plus}
						className='py-0 mb-0'
						onClick={handleCreate}
					>
						Create
					</Button>
				</div>
			)}
		</div>
	);
};

export default SubHeader;
