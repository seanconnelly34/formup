import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import HtmlElement from './HtmlElement';

const List = styled.div<{ isDraggingOver: boolean }>`
	border: 1px ${(props) => (props.isDraggingOver ? 'dashed #000' : '')};
	background: #fff;
	padding: 0.5rem 0.5rem 14px;
	border-radius: 3px;
	flex: 0 0 150px;
	font-family: sans-serif;
	height: auto !important;
`;

const Container = styled(List)`
	margin-bottom: 0.5rem;
`;

const Notice = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	padding: 0.5rem;
	margin: 0 0.5rem 0.5rem;
	border: 1px solid transparent;
	line-height: 1.5;
	color: #aaa;
`;

type TProps = {
	list: any;
	formElements: any;
	handleRemoveRow: (list: any) => void;
	handleRemoveElement: () => void;
};

const CanvasRow = ({
	list,
	formElements,
	handleRemoveRow,
	handleRemoveElement,
}: TProps) => {
	return (
		<Droppable droppableId={list} direction='horizontal'>
			{(provided, snapshot) => (
				<Container
					ref={provided.innerRef}
					isDraggingOver={snapshot.isDraggingOver}
					className='flex justify-evenly h-16'
				>
					<div className='w-full'>
						<div className='flex flex-row min-h-[50px] gap-4 '>
							{formElements[list].length
								? formElements[list].map(
										(item: any, index: number) => {
											return (
												<Draggable
													key={item.id}
													draggableId={item.id}
													index={index}
												>
													{(provided, snapshot) => (
														<HtmlElement
															{...provided}
															innerRef={
																provided.innerRef
															}
															item={item}
															draggableProps={
																provided.draggableProps
															}
															dragHandleProps={
																provided.dragHandleProps
															}
															isDragging={
																snapshot.isDragging
															}
															removeElement={
																handleRemoveElement
															}
															list={list}
														/>
													)}
												</Draggable>
											);
										}
								  )
								: !provided.placeholder && (
										<Notice>Drop items here</Notice>
								  )}
							{provided.placeholder}
						</div>
						<div
							className={`group relative flex justify-end h-[14px] ml-3 mt-1
							 ${true ? 'block' : 'hidden'}`}
						>
							<FontAwesomeIcon
								className='rounded bg-gray px-0 py-0 text-sm text-gray-400 shadow-sm'
								icon={faTrash}
								onClick={() => handleRemoveRow(list)}
							/>
							<span className='absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
								Delete
							</span>
						</div>
					</div>
				</Container>
			)}
		</Droppable>
	);
};

export default CanvasRow;
