import { HTMLInputTypeAttribute } from 'react';

interface IInput {
	type?: 'primary';
	placeholder?: string;
	className?: string;
	id?: string;
	name?: string;
	register: any;
	rows?: string;
	error?: boolean;
}
const Styles = {
	primary:
		'relative bg-transparent placeholder:text-sm border-b-[1px] text-gray w-full py-3 px-3 focus-visible:outline-0 h-full',
};

const TextArea = ({
	type = 'primary',
	placeholder,
	id,
	name,
	register,
	rows,
	error,
}: IInput) => {
	return (
		<textarea
			rows={rows}
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

export default TextArea;
