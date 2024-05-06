// import useSession from '@/hooks/useSession';
import Paragraph from '@/components/common/Paragraph';
import Image from 'next/image';
import Eye from '../../assets/eye-solid.svg';
import Plus from '../../assets/plus-square.svg';
import Button from '@/components/common/Button';
import Row from '@/components/dashboard/canvas/Row';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import Input from '@/components/common/Input';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useSelector } from '@/hooks/useRedux';

interface IRows {
	id: number;
}

const Products = () => {
	//smple form data (Econsent data) needs to be broken down into rows, each  with an id
	//i think removing stacked rows and making flex-direction with max of 6 columsn then moving to next line/row
	//this will enable dragging verticaly and horizontally...actually that wont work if you have 2 elements side by side and then you want the third to be
	//on the next line...fuck
	const localForm = useSelector((state) => state.canvasForm.form);
	// console.log('localForm', localForm);
	const [rows, setRows] = useState<IRows[]>(localForm.form);
	const handleRemoveRow = (id: number) => {
		setRows((currentRows) => currentRows.filter((row) => row.id !== id));
	};

	const handleAddRow = () => {
		setRows([...rows, { id: rows.length + 1 }]);
	};

	//dnd
	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setRows((prevRows) =>
			update(prevRows, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevRows[dragIndex]],
				],
			})
		);
	}, []);
	console.log('rows', rows);
	return (
		<div className={'flex flex-col container relative h-full'}>
			<div className='flex text-[24px] text-gray font-ralewayMed mb-3 items-center'>
				<div>
					<h1 className='text-[20px] font-ralewayMed'>
						Create your own online form
					</h1>
					<Paragraph className='ml-auto'>
						Customize your URL:
					</Paragraph>
					{/* <Input type='primary' placeholder='/preview' /> */}
				</div>
				<div className='flex ml-auto items-center'>
					<Paragraph>Preview Your Form</Paragraph>
					<Link href='/preview'>
						<Image
							src={Eye}
							alt='4mup preview your online form'
							className='w-8 ml-2'
						/>
					</Link>
				</div>
			</div>
			<DndProvider backend={HTML5Backend}>
				{rows.map((row, index) => (
					<Row
						key={row.id}
						removeRow={() => handleRemoveRow(row.id)}
						index={index}
						id={row.id}
						element={row}
						moveCard={moveCard}
					/>
				))}
			</DndProvider>

			<div className='flex justify-center mt-4'>
				<Image
					src={Plus}
					alt='add element 4mup'
					className='w-[22px]'
					onClick={handleAddRow}
				/>
			</div>
		</div>
	);
};

export default Products;
