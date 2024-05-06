import { useState } from 'react';

const iconStyles = ' cursor-pointer p-6 bg-red';
const SideNav = () => {
	const [slim, setSlim] = useState<boolean>(true);

	const toggleSlim = () => {
		setSlim(!slim);
	};

	return (
		<nav className='w-[77px] bg-white border-r-[1px] border-secondary h-full flex justify-center p-0 m-0'>
			<ul className='mt-6'>
				<li className={iconStyles}>1</li>
				<li className={iconStyles}>2</li>
				<li className={iconStyles}>3</li>
			</ul>
		</nav>
	);
};

export default SideNav;
