import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Paragraph from '@/components/common/Paragraph';
import Button from '../common/Button';
import Input from '../common/Input';
import Loader from '../common/Loader';

interface IApplicationReview {
	register: any;
	forgotPasswordResponse: any;
	forgotPasswordError: any;
	loadingForgotPassword: boolean;
	handleSubmit: any;
	handleLoginRedirect: () => void;
	onSubmit: any;
	yupErrors: any;
	loadingVerificationLink: boolean;
	statusCode: number | null;
}

const ApplicationReview = ({
	register,
	forgotPasswordResponse,
	forgotPasswordError,
	loadingForgotPassword,
	handleSubmit,
	handleLoginRedirect,
	onSubmit,
	yupErrors,
	loadingVerificationLink,
	statusCode,
}: IApplicationReview) => {
	return (
		<RightBlackPanel>
			{loadingVerificationLink ? (
				<Loader />
			) : (
				<div className='flex flex-col h-[300px]'>
					{statusCode === 200 ? (
						<h1 className='text-xl mt-16 leading-[35px] text-green-100'>
							Verification Success
						</h1>
					) : (
						<h1 className='text-xl mt-16 leading-[35px] text-red'>
							Email verification link expired
						</h1>
					)}

					{statusCode === 200 ? (
						<Paragraph type='base' className='py-4'>
							You have successfully verified your email. Go to
							dashboard.
						</Paragraph>
					) : (
						<Paragraph type='base' className='py-4'>
							Verification link has expired. Click below to resend
							link.
						</Paragraph>
					)}

					{statusCode === 200 ? (
						<Button
							type='accent'
							onClick={handleLoginRedirect}
							className='mt-auto'
						>
							Login
						</Button>
					) : (
						<>
							<div className='flex-1 w-full'>
								<div className={'py-[18px] relative w-full'}>
									<Input
										register={register('email')}
										placeholder='Email'
									/>
									<p
										className={
											'absolute left-0 top-7 text-red'
										}
									>
										*
									</p>
								</div>
								<div className='flex-1'>
									{!!forgotPasswordResponse?.message && (
										<Paragraph
											className={'mb-4 text-left'}
											type={'success'}
										>
											{forgotPasswordResponse?.message}
										</Paragraph>
									)}
									{!!forgotPasswordError?.errors?.email && (
										<Paragraph
											type={'error'}
											className={'mb-4 text-left'}
										>
											{forgotPasswordError?.message}
										</Paragraph>
									)}
									{!!yupErrors?.email?.message && (
										<Paragraph
											type={'error'}
											className={'mb-4 text-left'}
										>
											{yupErrors.email.message}
										</Paragraph>
									)}
								</div>
								<Button
									disabled={loadingForgotPassword}
									onClick={handleSubmit(onSubmit)}
									type='accent'
									loading={loadingForgotPassword}
								>
									Resend Email
								</Button>
								<p className='text-[16px] leading-[32px] pt-[25px] text-gray text-left mb-[60px]'>
									Need help? Contact support.
								</p>
							</div>
						</>
					)}
				</div>
			)}
		</RightBlackPanel>
	);
};

export default ApplicationReview;
