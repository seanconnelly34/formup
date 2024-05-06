import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDetectClickOutside } from 'react-detect-click-outside';
import {
	faUnderline,
	faBold,
	faItalic,
	faListUl,
	faListOl,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import { setInputValues, setRequiredField } from '@/store/formElementsSlice';

const Styles = {
	text: 'relative bg-transparent placeholder:text-gray-800 w-full py-3 px-3 focus-visible:outline-0 text-gray-600 text-[12px]',
	primary:
		'relative bg-transparent placeholder:text-sm w-full py-3 px-3 focus-visible:outline-0 text-gray',
	secondary:
		'relative bg-transparent border-b-[1px] placeholder:text-sm w-full py-3 px-3 focus-visible:outline-0 text-gray',
	icon: 'relative bg-transparent placeholder:text-sm border-b-[1px] w-full py-3 pr-3 pl-[39px] focus-visible:outline-0',
	checkbox:
		'relative h-[25px] w-full accent-black after:content after:absolute after:h-full after:w-full after:border after:border-white after:bg-black checked:after:bg-transparent',
	file: 'hidden',
};

interface IInput {
	type?: 'primary' | 'secondary' | 'checkbox' | 'icon' | 'file' | 'text';
	HTMLType?: HTMLInputTypeAttribute;
	placeholder?: string;
	className?: string;
	id?: string;
	name?: string;
	register?: any;
	error?: boolean;
	removeElement?: () => void;
	item?: any;
	value: string | number | readonly string[] | undefined;
	list: string;
	required: boolean;
}

const Input = ({
	type = 'primary',
	placeholder,
	id,
	name,
	HTMLType = 'text',
	error,
	value,
	list,
	required,
}: IInput) => {
	const dispatch = useDispatch();
	const [showTools, setShowTools] = useState<boolean>(false);
	const [disabledClick, setDisableClick] = useState<boolean>(false);

	const handleElementValue = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		dispatch(setInputValues({ id, list, value }));
	};

	const handleShowTools = () => {
		setShowTools(true);
	};

	const handleOutsideClick = () => {
		setShowTools(false);
	};
	const ref = useDetectClickOutside({
		onTriggered: handleOutsideClick,
		disableClick: disabledClick,
	});

	const handleControlsHover = (bool: boolean) => {
		setDisableClick(bool);
	};

	const handleIsRequired = () => {
		dispatch(setRequiredField({ id, list, required }));
	};
	
	return (
		<div ref={ref} className='flex w-full relative'>
			<input
				type={HTMLType}
				placeholder={placeholder}
				id={id}
				name={name}
				value={value}
				onClick={handleShowTools}
				onChange={(e) => handleElementValue(e)}
				className='w-full'
			/>
			<div
				className={`${
					showTools ? 'block' : 'hidden'
				} z-[9999] absolute top-10 left-[-8px] flex justify-center gap-4 w-60 text-gray-600 border-gray-500 border-[1px] rounded px-2 py-1`}
				onMouseEnter={() => handleControlsHover(true)}
				onMouseLeave={() => handleControlsHover(false)}
			>
				<input placeholder='Enter label' />
				<div className='border-l-[1px] border-gray-400'>
					<label className='relative inline-flex items-center cursor-pointer ml-2 mt-1'>
						<input
							type='checkbox'
							value='required'
							className='sr-only peer'
							onChange={handleIsRequired}
							checked={required}
						/>
						<div
							className={`w-8 h-4 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 after:absolute after:top-0 after:left-0 after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all ${
								required
									? "peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']   peer-checked:bg-red-500"
									: ''
							}`}
						></div>

						<span className='ml-3 text-[9px] font-medium text-gray-600'>
							Required
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Input;
