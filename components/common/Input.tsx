import { HTMLInputTypeAttribute } from 'react';

interface IInput {
	type?: 'primary' | 'secondary' | 'checkbox' | 'icon' | 'file';
	HTMLType?: HTMLInputTypeAttribute;
	placeholder?: string;
	className?: string;
	id?: string;
	name?: string;
	register: any;
	error?: boolean;
}
const Styles = {
	primary:
		'relative bg-transparent placeholder:text-sm border-b-[1px] w-full py-3 px-3 focus-visible:outline-0 text-gray',
	secondary: '',
	icon: 'relative bg-transparent placeholder:text-sm border-b-[1px] w-full py-3 pr-3 pl-[39px] focus-visible:outline-0',
	checkbox:
		'relative h-[25px] w-full accent-black after:content after:absolute after:h-full after:w-full after:border after:border-white after:bg-black checked:after:bg-transparent',
	file: 'hidden',
};

const Input = ({
	type = 'primary',
	placeholder,
	id,
	name,
	register,
	HTMLType = 'text',
	error,
}: IInput) => {
	return (
		<input
			type={HTMLType}
			placeholder={placeholder}
			id={id}
			name={name}
			className={`${Styles[type]} ${
				error ? 'border-red' : 'border-gray'
			}`}
			{...register}
		/>
	);
};

export default Input;
