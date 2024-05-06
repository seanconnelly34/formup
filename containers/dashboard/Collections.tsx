import useFetchEntity from '@/hooks/useFetchEntity';
import Loader from '@/components/common/Loader';
import ListIcon from '../../assets/ListIcon.svg';
import GridIcon from '../../assets/GridIcon.svg';
import GridIconSelected from '../../assets/GridIconSelected.svg';
import ListIconSelected from '../../assets/ListIconSelected.svg';
import SAMPLEIMAGE from '../../assets/SAMPLE-GRID.png';
import GridLayout from '@/components/dashboard/GridLayout';
import { useCallback, useState } from 'react';
import ListLayout from '@/components/dashboard/ListLayout';
import SubHeader from '@/components/dashboard/SubHeader';
import NoEntities from '@/components/dashboard/NoEntities';
import AddDetails from '@/components/dashboard/AddDetails';
import { AddDetailsSchema } from '@/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IAddDetails } from '@/types';
import { useRequest } from '@/hooks/useRequest';
import APIs from '@/services/api';
import { useDropzone } from 'react-dropzone';
import SuccessBanner from '@/components/dashboard/SuccessBanner';
import GreenCheck from '../../assets/green-check.svg';
import Paragraph from '@/components/common/Paragraph';

const SAMPLE_COLLECTIONS = {
	data: [
		{
			id: '1',
			name: 'Collection Name',
			body: 'some body text description stuff',
			media: SAMPLEIMAGE.src,
			link: 'www.google.com',
			count: '45',
		},
		{
			id: '2',
			name: 'Collection Name',
			body: 'some body text description stuff',
			media: SAMPLEIMAGE.src,
			link: 'www.google.com',
			count: '6',
		},
		{
			id: '3',
			name: 'Collection Name',
			body: 'some body text description stuff',
			media: SAMPLEIMAGE.src,
			link: 'www.google.com',
			count: '8',
		},
		{
			id: '4',
			name: 'Collection Name',
			body: 'some body text description stuff',
			media: SAMPLEIMAGE.src,
			link: 'www.google.com',
			count: '2',
		},
		{
			id: '5',
			name: 'Collection Name',
			body: 'some body text description stuff',
			media: SAMPLEIMAGE.src,
			link: 'www.google.com',
			count: '11',
		},
		{
			id: '6',
			name: 'Collection Name',
			body: 'some body text description stuff',
			media: SAMPLEIMAGE.src,
			link: 'www.google.com',
			count: '3',
		},
	],
};
const Collections = () => {
	const [grid, setGrid] = useState<boolean>(true);
	//add details component
	const [image, setImage] = useState<any>();
	const [ratioError, setRatioError] = useState<string>('');
	const [sizeError, setSizeError] = useState<string>('');
	const [imageToSend, setImageToSend] = useState<any>();
	const [showSuccess, setShowSuccess] = useState<boolean>(true);
	const {
		doRequest: createCollection,
		loading: loadingCreateCollection,
		error: errorCreateCollection,
		statusCode,
	} = useRequest({ func: APIs.handleCreateCollection });

	const {
		entity: collections,
		loading,
		renderPagination,
	} = useFetchEntity('collections');
	const [create, setCreate] = useState<boolean>(false);

	const handleChangeLayout = () => {
		setGrid(!grid);
	};

	const handleCreate = () => {
		setCreate(!create);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAddDetails>({
		resolver: yupResolver(AddDetailsSchema),
	});

	const encodeImageFileAsURL = (element: any) => {
		const reader = new FileReader();
		reader.onloadend = function () {
			setImageToSend(reader.result);
		};
		reader.readAsDataURL(element);
	};

	const onSubmit = (data: IAddDetails) => {
		data.photo = imageToSend;
		data.organization_id = 'pop';
		// {
		// 	"organization_id": "distinction",
		// 	"name": "Foo Bar",
		// 	"description": "This is Foo Bar Collection...",
		// 	"photo": "coming soon.",
		// 	"details": "This is Foo Bar Collection..."
		// 	}
		return createCollection(data);
	};

	const onDrop = useCallback((acceptedFiles: any) => {
		const img = document.createElement('img');
		img.src = URL.createObjectURL(acceptedFiles[0]);

		img.addEventListener('load', () => {
			setRatioError('');
			setSizeError('');
			setImage('');
			if (img.width !== img.height) {
				setRatioError('Image must be a perfect 1:1 square ratio');
				return;
			} else {
				setImage(img.src);
				encodeImageFileAsURL(acceptedFiles[0]);
			}
			if (acceptedFiles[0].size > 4500000) {
				setSizeError('Image must be smaller than 4.5MB');
				return;
			} else {
				setImage(img.src);
				encodeImageFileAsURL(acceptedFiles[0]);
			}
		});
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	const handleCloseSuccess = () => {
		setShowSuccess(false);
	};

	return (
		<div className={'flex flex-col container relative h-full'}>
			<SuccessBanner
				show={showSuccess}
				icon={GreenCheck}
				color='bg-green-100'
				message={
					<Paragraph className='text-black pl-5'>
						The collection{' '}
						<span className='font-bold'>COLLECTION NAME </span> is
						successfully created
					</Paragraph>
				}
				jsx={true}
				onClose={handleCloseSuccess}
			/>
			{create ? (
				<AddDetails
					register={register}
					handleSubmit={handleSubmit}
					yupErrors={errors}
					onSubmit={onSubmit}
					getRootProps={getRootProps}
					getInputProps={getInputProps}
					image={image}
					ratioError={ratioError}
					sizeError={sizeError}
					handleCreate={handleCreate}
				/>
			) : (
				<>
					<SubHeader
						title='Collections'
						listIconSelected={grid ? ListIcon : ListIconSelected}
						gridIconSelected={grid ? GridIconSelected : GridIcon}
						handleChangeLayout={handleChangeLayout}
						handleCreate={handleCreate}
					/>

					{!!SAMPLE_COLLECTIONS ? (
						<>
							{grid ? (
								<GridLayout
									entity={SAMPLE_COLLECTIONS}
									loading={loading}
								/>
							) : (
								<ListLayout
									entity={SAMPLE_COLLECTIONS}
									loading={loading}
								/>
							)}
							<div className={'flex flex-row justify-end mt-4'}>
								{renderPagination()}
							</div>
						</>
					) : (
						<NoEntities handleCreate={handleCreate} />
					)}
				</>
			)}
		</div>
	);
};

export default Collections;
