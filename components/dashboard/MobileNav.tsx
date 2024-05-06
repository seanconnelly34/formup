import { ISidebarItem } from '@/types';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import Button from '../common/Button';

const MobileNav = ({
	items,
	activeTab,
}: {
	items: ISidebarItem[];
	activeTab: ISidebarItem | undefined;
}) => {
	return (
		<div
			className={
				'block sm:hidden w-full bg-backgrounds-primary fixed z-[998]'
			}
		>
			<div
				className={'flex h-[92px] w-full fixed bottom-0 justify-evenly'}
			>
				{items.map(({ icon, title, url }) => (
					<Link className='p-0 m-0 w-full' key={nanoid()} href={url}>
						<Button
							className={`w-full rounded-none transition-none hover:bg-backgrounds-hover hover:text-white flex-col  border-0 mb-2 ${
								activeTab?.url === url
									? 'bg-dashboard-mobile-selected'
									: ''
							}`}
						>
							<div className={'h-5 w-5'}>{icon()}</div>
							<div className={'capitalize'}>{title}</div>
							<div
								className={`w-[20px] h-[6px] ${
									activeTab?.url === url
										? 'bg-purple-100'
										: 'bg-black'
								}`}
							/>
						</Button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MobileNav;
