import { useEffect } from 'react';
import Image from 'next/image';
import Dropdown from '../../common/Dropdown';
import Paragraph from '../../common/Paragraph';
import Grip from '../../../assets/grip.svg';
import Element from '../../../assets/element.svg';
import X from '../../../assets/x.svg';
import Plus from '../../../assets/plus-square.svg';
import { useRef, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Input from './Input';
import { useDrag, useDrop } from 'react-dnd';

let elementId = 0;
// interface IElements {
// 	id: number;
// 	type: string;
// }

// interface IColumn {
// 	removeRow: () => void;
// 	index: number;
// 	moveRow: (dragIndex: any, hoverIndex: any) => void;
// 	row: any;
// }

const Row = ({ removeRow, id, index, moveCard, element }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	const [elements, setElements] = useState([]);

	const handleDropdown = () => {
		setDropDownOpen(!dropDownOpen);
	};

	const closeOutsideClick = () => {
		setDropDownOpen(false);
	};

	const ref = useDetectClickOutside({
		onTriggered: closeOutsideClick,
		disableClick: !dropDownOpen,
	});

	const handleRemoveElement = (id) => {
		setDropDownOpen(false);
		setElements((currentElements) =>
			currentElements.filter((element) => element.id !== id)
		);
	};

	const handleAddElement = (type) => {
		setDropDownOpen(false);
		setElements([...elements, { id: elementId++ }]);
	};

	//dnd
	const dragRef = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: 'row',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!dragRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = dragRef.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: 'row',
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0 : 1;
	drag(drop(dragRef));

	const displayElementType = (element) => {
		if (element.hasOwnProperty('header')) {
			setElements([
				...elements,
				{
					id: elements.length + 1,
					placeholder: element.header,
					style: 'bold',
				},
			]);
		}
	};

	useEffect(() => {
		if (element.hasOwnProperty('header')) {
			setElements([
				...elements,
				{
					id: elements.length + 1,
					placeholder: element.header,
					style: 'bold',
				},
			]);
		}
	}, [id, element, element.header]);

	return (
		<div
			ref={dragRef}
			style={{ opacity }}
			data-handler-id={handlerId}
			className='flex w-full h-[100px] rounded bg-white canvasColumnBorder mb-1'
		>
			<div className='flex ml-4'>
				<Image className='w-[16px]' src={Grip} alt='grabber' />
			</div>
			<div ref={ref} className='flex self-center ml-6'>
				<Dropdown
					open={dropDownOpen}
					styles='border-grey border-1'
					trigger={
						<Image
							src={Plus}
							alt='element type'
							onClick={handleDropdown}
							className='w-6'
						/>
					}
				>
					<div className='flex bg-[#222428] hover:bg-black  py-2 px-4 w-full h-[50px] items-center'>
						<Image
							src={Element}
							alt='element type'
							onClick={() => handleAddElement('heading')}
							className='w-[13px] mr-2'
						/>
						<Paragraph type='white'>Heading</Paragraph>
					</div>
					<div className='flex bg-[#222428] hover:bg-black  py-2 px-4 w-full h-[50px] items-center'>
						<Image
							src={Element}
							alt='element type'
							onClick={() => handleAddElement('text')}
							className='w-[13px] mr-2'
						/>
						<Paragraph type='white'>Text</Paragraph>
					</div>
					<div className='flex bg-[#222428] hover:bg-black  py-2 px-4 w-full h-[50px] items-center'>
						<Image
							src={Element}
							alt='element type'
							onClick={() => handleAddElement('input')}
							className='w-[13px] mr-2'
						/>
						<Paragraph type='white'>Input</Paragraph>
					</div>
					<div className='flex bg-[#222428] hover:bg-black  py-2 px-4 w-full h-[50px] items-center'>
						<Image
							src={Element}
							alt='element type'
							onClick={() => handleAddElement('checkbox')}
							className='w-[13px] mr-2'
						/>
						<Paragraph type='white'>Checkbox</Paragraph>
					</div>
				</Dropdown>
			</div>
			<div className='flex w-full'>
				{elements.map((element) => {
					return (
						<Input
							key={element.id}
							placeholder={element.placeholder}
							removeElement={() =>
								handleRemoveElement(element.id)
							}
						/>
					);
				})}
			</div>
			<div className='flex ml-auto self-start p-2'>
				<Image
					className='w-6'
					src={X}
					alt='close column 4mup'
					onClick={removeRow}
				/>
			</div>
		</div>
	);
};

export default Row;
