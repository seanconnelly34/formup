import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faXmark } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import styled from 'styled-components';
//import TextArea from '@/components/dashboard/canvas/TextArea';
import Editor from './Editor';
import { useSelector } from '@/hooks/useRedux';
import { ELEMENT_TYPES } from '@/utils';

const Item = styled.div<{ isDragging: boolean }>`
	display: flex;
	font-size: 11px;
	user-select: none;
	padding: 0.5rem;
	margin: 0 0 0.5rem 0;
	/* align-items: flex-start;
	align-content: flex-start; */
	min-height: 46px;
	border-radius: 5px;
	background: #fff;
	border: 1px ${(props) => (props.isDragging ? 'dashed #000' : 'solid #ddd')};
`;

const Handle = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	user-select: none;
	margin: -0.5rem 0.5rem -0.5rem -0.5rem;
	padding: 0.5rem;
	line-height: 1.5;
	border-radius: 3px 0 0 3px;
	background: #fff;
	border-right: 1px solid #ddd;
	color: #000;
`;
type TProps = {
	item: any;
	isDragging: boolean;
	draggableProps: any;
	dragHandleProps: any;
	innerRef: any;
	removeElement: (id: string, list: string) => void;
	list: string;
};

const HtmlElement = ({
	item,
	innerRef,
	draggableProps,
	dragHandleProps,
	isDragging,
	removeElement,
	list,
}: TProps) => {
	const formElements = useSelector(
		(state) => state.formElements.formElements
	);

	return (
		<Item
			ref={innerRef}
			{...draggableProps}
			isDragging={isDragging}
			// style={provided.draggableProps.style}
			className='w-full'
		>
			<Handle {...dragHandleProps}>
				<FontAwesomeIcon icon={faGripVertical} className='w-3' />
			</Handle>
			{item.meta === ELEMENT_TYPES.text && (
				<Editor
					key={item.id}
					id={item.id}
					value={item.value}
					list={list}
				/>
			)}

			{item.meta === ELEMENT_TYPES.user_input && (
				<Input
					key={item.id}
					id={item.id}
					item={item}
					value={item.value}
					type='secondary'
					placeholder={item.placeholder}
					list={list}
					required={item.required}
				/>
			)}
			{item.meta === ELEMENT_TYPES.email && (
				<Input
					key={item.id}
					id={item.id}
					type='secondary'
					value={item.value}
					placeholder={item.content}
					list={list}
					required={item.required}
				/>
			)}
			{item.meta === ELEMENT_TYPES.file && (
				<Input
					key={item.id}
					id={item.id}
					HTMLType='file'
					value={item.value}
					placeholder={item.content}
					list={list}
					required={item.required}
				/>
			)}
			{item.meta === ELEMENT_TYPES.radio && (
				<Input
					key={item.id}
					id={item.id}
					HTMLType='radio'
					value={item.value}
					placeholder={item.content}
					list={list}
					required={item.required}
				/>
			)}
			{item.meta === ELEMENT_TYPES.checkbox && (
				<Input
					key={item.id}
					id={item.id}
					HTMLType='checkbox'
					value={item.value}
					placeholder={item.content}
					list={list}
					required={item.required}
				/>
			)}

			<FontAwesomeIcon
				className='w-4'
				icon={faXmark}
				onClick={() => removeElement(item.id, list)}
			/>
		</Item>
	);
};

export default HtmlElement;
