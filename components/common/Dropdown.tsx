import { IDropdown } from '@/types';

const Dropdown = ({ open, trigger, children, styles = null }: IDropdown) => {
	return (
		<div className='relative inline-block'>
			{trigger}
			{open ? (
				<div
					className={`${styles} absolute list-none p-0 bg-black border border-grey-900 b`}
				>
					{children}
				</div>
			) : null}
		</div>
	);
};

export default Dropdown;
