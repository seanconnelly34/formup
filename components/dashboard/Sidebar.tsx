import { ISidebarItem } from '@/types';
import Link from 'next/link';
// import useSession from '@/hooks/useSession';
import { nanoid } from 'nanoid';
import Button from '../common/Button';

const Sidebar = ({
	items,
	activeTab,
}: {
	items: ISidebarItem[];
	activeTab: ISidebarItem | undefined;
}) => {
	// const { logout } = useSession({});

	return (
		<div className={'h-full'}>
			{items.map(({ icon, title, url }) => (
				<Link key={nanoid()} href={url}>
					<Button
						className={`transition-none last-of-type:mb-0 hover:bg-backgrounds-hover hover:text-white justify-start pl-10 w-full border-0 mb-2 ${
							activeTab?.url === url
								? 'bg-dashboard-selected'
								: ''
						}`}
					>
						<div className={'h-5 w-5 mr-6'}>{icon()}</div>
						<div className={'capitalize'}>{title}</div>
					</Button>
				</Link>
			))}
			<Button
				className={`transition-none last-of-type:mb-0 hover:bg-backgrounds-hover hover:text-white justify-start pl-10 w-full border-0 mb-2`}
			>
				<div className={'capitalize'}>Logout</div>
			</Button>
		</div>
	);
};

export default Sidebar;
