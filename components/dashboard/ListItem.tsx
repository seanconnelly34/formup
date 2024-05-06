import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '../common/Paragraph';
import Edit from '../../assets/edit-light.svg';
import Trash from '../../assets/trash-light.svg';

interface IListItem {
	image: string;
	href: string;
	title: string;
	count: string;
}

const ListItem = ({ image, title, count, href }: IListItem) => {
	return (
		<div
			className={`flex items-center bg-backgrounds-primary hover:bg-backgrounds-lightGrey border-b-[1px] border-[#3C424A] px-[14px] py-[14px]`}
		>
			<Link href={href} target='_blank'>
				<div className='h-[70px] w-[70px] overflow-hidden'>
					<Image
						src={image}
						alt={`Momentable Exhibit ${title}`}
						height={70}
						width={70}
					/>
				</div>
			</Link>
			<div className='w-[35%] pl-4'>
				{title ? <Paragraph type='white'>{title}</Paragraph> : null}
			</div>
			<div className='w-[65%] flex'>
				{count ? (
					<Paragraph type='white' weight='light'>
						{count}
					</Paragraph>
				) : null}
				<div className='flex flex-end ml-auto gap-1 '>
					<div className='flex bg-[#090C10] py-[7px] px-[9px] cursor-pointer'>
						<Image src={Edit} alt='edit' />
					</div>
					<div className='flex bg-[#090C10] py-[7px] px-[8px] cursor-pointer'>
						<Image src={Trash} alt='trash' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
