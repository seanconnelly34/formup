import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import CanvasRow from '@/components/dashboard/canvas/CanvasRow';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DRAGGABLE_FORM_ELEMENTS } from '../../utils';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import { setFormElements } from '@/store/formElementsSlice';

const Item = styled.div`
	display: flex;
	font-size: 11px;
	user-select: none;
	padding: 0.5rem;
	margin: 0 0 0.5rem 0;
	line-height: 1.5;
	border-radius: 5px;
	background: #fff;
	border: 1px ${(props) => (props.isDragging ? 'dashed #000' : 'solid #ddd')};
`;

const Clone = styled(Item)`
	~ div {
		transform: none !important;
	}
`;

const List = styled.div`
	border: 1px
		${(props) => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
	background: #fff;
	padding: 0.5rem 0.5rem 0;
	border-radius: 3px;
	flex: 0 0 150px;
	font-family: sans-serif;
`;

const ElementsList = styled(List)`
	position: fixed;
	width: 110px;
	border-radius: 5px;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	margin: 0.5rem;
	padding: 0.5rem;
	color: #000;
	border: 1px solid #ddd;
	background: #fff;
	border-radius: 3px;
	font-size: 1rem;
	cursor: pointer;
`;

/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const item = sourceClone[droppableSource.index];

	destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
	return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);
	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};

// same row - function reordering
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const Canvas2 = () => {
	const dispatch = useDispatch();
	const formElements = useSelector(
		(state) => state.formElements.formElements
	);

	const onDragEnd = (result) => {
		const { source, destination } = result;
		// dropped outside the list
		if (!destination) {
			return;
		}

		switch (source.droppableId) {
			//COPYING - dragging from list of items (copying over to canvas)
			case 'ITEMS':
				const copyOver = {
					...formElements,
					[destination.droppableId]: copy(
						DRAGGABLE_FORM_ELEMENTS,
						formElements[destination.droppableId],
						source,
						destination
					),
				};
				dispatch(setFormElements(copyOver));
				break;

			//SAME ROW - dragging reposition in the same row
			case destination.droppableId:
				const respositionSameRow = {
					...formElements,
					[destination.droppableId]: reorder(
						formElements[source.droppableId],
						source.index,
						destination.index
					),
				};

				dispatch(setFormElements(respositionSameRow));
				break;

			//ROW TO NEW ROW - dragging from one row to another
			default:
				const dragToNewRow = {
					...formElements,
					...move(
						formElements[source.droppableId],
						formElements[destination.droppableId],
						source,
						destination
					),
				};
				dispatch(setFormElements(dragToNewRow));
				break;
		}
	};

	const handleAddRow = () => {
		const newRow = { ...formElements, [uuid()]: [] };
		dispatch(setFormElements(newRow));
	};

	const handleRemoveRow = (rowId) => {
		const { [rowId]: _, ...rest } = formElements;
		dispatch(setFormElements(rest));
	};

	const handleRemoveElement = (id, list) => {
		const parentObject = formElements[list];
		const elementRemovedUpdate = parentObject.filter(
			(obj) => obj.id !== id
		);
		const updatedParent = { ...formElements, [list]: elementRemovedUpdate };
		dispatch(setFormElements(updatedParent));
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='ITEMS' isDropDisabled={true}>
				{(provided, snapshot) => (
					<ElementsList
						ref={provided.innerRef}
						isDraggingOver={snapshot.isDraggingOver}
					>
						{DRAGGABLE_FORM_ELEMENTS.map((item, index) => (
							<Draggable
								key={item.id}
								draggableId={item.id}
								index={index}
							>
								{(provided, snapshot) => (
									<>
										<Item
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											isDragging={snapshot.isDragging}
											style={
												provided.draggableProps.style
											}
											className='text-gray-600'
										>
											<FontAwesomeIcon
												className='text-gray-600 h-[13px] mr-1'
												icon={item.icon}
											/>
											{item.content}
										</Item>
										{snapshot.isDragging && (
											<Clone>{item.content}</Clone>
										)}
									</>
								)}
							</Draggable>
						))}
					</ElementsList>
				)}
			</Droppable>

			<div className='ml-[111px]'>
				{Object.keys(formElements).map((list, i) => (
					<CanvasRow
						key={list}
						list={list}
						formElements={formElements}
						handleRemoveRow={handleRemoveRow}
						handleRemoveElement={handleRemoveElement}
					/>
				))}
				<Button onClick={handleAddRow}>
					<svg width='24' height='24' viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'
						/>
					</svg>
					<div className='my-0 mx-2'>Add List</div>
				</Button>
				<h1>
					Ensure no nested spans, must be lateral spans. reorder when
					selecting.
				</h1>
				<h1>disable style controls unless text is selected</h1>
				<p>breakup draggable sections 'form content'and 'user input'</p>
				<p>
					FIX TEXTAREA SIZING ISSUE, MAKE HEADING DRAGGABLE COMPONENT
					min font size bigger than paragraph, ONLY TWO LINES MAX AND
					A SEPERATE PARAGRAPH DRAGGABLE COMPONENT WITH MAX FONT SIZE
				</p>
				<p>Limit 4 elements per row</p>
				<p>add have entire addresss block</p>
				<p>add radio group with min 2</p>
				<p>add check with label beside it</p>
				<p>style file upload input type</p>
			</div>
		</DragDropContext>
	);
};
export default Canvas2;
