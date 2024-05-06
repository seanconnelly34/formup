import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Paragraph from '@/components/common/Paragraph';
import TextArea from '@/components/common/TextArea';
import SubHeader from '@/components/dashboard/SubHeader';
import Upload from '../../assets/upload-icn-white.svg';
import Image from 'next/image';

interface IAddDetails {
	register: any;
	handleSubmit: any;
	yupErrors: any;
	onSubmit: any;
	getRootProps: any;
	getInputProps: any;
	image: any;
	ratioError: any;
	sizeError: any;
	handleCreate: () => void;
}

const AddDetails = ({
	register,
	handleSubmit,
	yupErrors,
	onSubmit,
	getRootProps,
	getInputProps,
	image,
	ratioError,
	sizeError,
	handleCreate,
}: IAddDetails) => {
	return (
		<>
			<SubHeader title='Create Collection' />
			<div className='bg-backgrounds-primary px-8 py-6'>
				<Paragraph type='white' size='md'>
					Add Details
				</Paragraph>
				<form>
					<div className='gridCreateCollection grid-cols-1 lg:grid-cols-2 gap-4'>
						<div className='aspect-square'>
							<div className='relative'>
								<Input
									register={register('name')}
									placeholder='Name'
									error={!!yupErrors.name}
								/>
								<p className={'absolute left-0 top-7 text-red'}>
									*
								</p>
								{!!yupErrors.name && (
									<Paragraph
										type={'error'}
										className={'pt-3 px-3'}
									>
										Name is required
									</Paragraph>
								)}
								{/* {!!signUpServerErrors?.errors?.firstName && (
										<Paragraph
											type={'error'}
											className={'pt-3 px-3'}
										>
											{signUpServerErrors.errors?.firstName}
										</Paragraph>
									)} */}
							</div>

							<TextArea
								register={register('description')}
								placeholder='Description'
								error={!!yupErrors?.description}
							/>
						</div>
						<div
							className={`aspect-square bg-backgrounds-content p-2 items-center justify-center border-[1px] mt-[49px] ${
								!!ratioError || !!sizeError
									? 'border-red'
									: 'border-backgrounds-lightGrey'
							}`}
							{...getRootProps()}
						>
							<div className='flex flex-col gap-4 h-full w-full text-center items-center justify-center'>
								{image ? (
									<div className='relative w-full h-full'>
										<Image
											className='aspect-square'
											src={image}
											fill={true}
											alt='Exhibyt image upload'
										/>
									</div>
								) : (
									<>
										<label
											htmlFor='uploadImage'
											className='bg-blue-100 cursor-pointer h-[50px] w-[70%] ralewayMed flex items-center justify-center gap-4'
										>
											<Image src={Upload} alt='upload' />
											<Paragraph type='white' size='md'>
												Create Collection
											</Paragraph>

											<Input
												type='file'
												id='uploadImage'
												HTMLType='file'
												{...getInputProps()}
											/>
										</label>
										<Paragraph type='white' size='sm'>
											1080 x 1080
										</Paragraph>
										{!!ratioError && (
											<Paragraph size='sm' weight='light'>
												{ratioError}
											</Paragraph>
										)}
										{!!sizeError && (
											<Paragraph size='sm' weight='light'>
												{sizeError}
											</Paragraph>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className='flex w-[300px] mt-6 gap-6'>
				<Button
					className='bg-backgrounds-primary'
					onClick={handleCreate}
				>
					Cancel
				</Button>
				<Button onClick={handleSubmit(onSubmit)}>Submit</Button>
			</div>
		</>
	);
};

export default AddDetails;
