import { ReactNode } from 'react';
// import useSession from '@/hooks/useSession';
import useRouter from '@/hooks/useRouter';
import Loader from './Loader';
import Image from 'next/image';

interface IButton {
	name?: string;
	type?: 'primary' | 'secondary' | 'accent' | 'link' | 'outline' | 'blueLink';
	children: string | ReactNode;
	disabled?: boolean;
	onClick?: any;
	className?: string;
	loading?: boolean;
	icon?: any;
}

const Styles = {
	primary: '',
	secondary:
		'flex justify-center items-center bg-[#222428] font-ralewayMed text-white py-2 px-4 w-full h-[50px] disabled:opacity-20 hover:bg-black',
	accent: `flex justify-center items-center bg-blue-100 border-1 font-ralewayMed text-white py-2 px-4 w-full h-[50px] disabled:opacity-20`,
	link: 'text-blue-100 text-[14px] text-white font-ralewayMed',
	outline:
		'text-[14px] border-[1px] font-ralewayMed px-4 h-[46px] bg-[#090C10] disabled:opacity-20',
	blueLink: 'text-blue-100 text-[14px] text-blue-100 font-raleway',
};

const Button = ({
	name,
	children,
	disabled = false,
	onClick = () => {},
	type = 'accent',
	className,
	loading = false,
	icon = false,
}: IButton) => {
	// const { isValidating: sessionLoading } = useSession({
	// 	middleware: 'passive',
	// 	shouldMutateOnMount: false,
	// });
	const { loading: routerLoading } = useRouter({});

	return (
		<button
			name={name}
			onClick={onClick}
			disabled={disabled || routerLoading}
			className={`${Styles[type]} ${className} disabled:opacity-50`}
		>
			{loading ? <Loader /> : children}
			{icon && (
				<Image className='ml-[11px]' src={icon} alt='button icon' />
			)}
		</button>
	);
};
export default Button;
