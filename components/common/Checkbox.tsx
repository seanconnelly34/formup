import Input from '@/components/common/Input';
import { ReactNode } from 'react';

interface ICheckbox {
	register: any;
	children: ReactNode;
	name: string;
	htmlFor: string;
	className?: string;
}

const Checkbox = ({
	htmlFor,
	register,
	children,
	name,
	className,
}: ICheckbox) => {
	return (
		<div className={`flex flex-row justify-start ${className}`}>
			<div className={'w-[25px]'}>
				<Input
					id={htmlFor}
					type='checkbox'
					register={register(name)}
					HTMLType='checkbox'
					name={name}
					placeholder='Checkbox'
				/>
			</div>
			<div className={'ml-4 w-full'}>
				<label
					htmlFor={htmlFor}
					className='text-gray text-sm leading-[26px] flex w-full cursor-pointer'
				>
					<span>{children}</span>
				</label>
			</div>
		</div>
	);
};

export default Checkbox;
