import Button from '../common/Button';
import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Loader from '../common/Loader';
import { capitalizeFirstLetter } from '@/utils';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Paragraph from '@/components/common/Paragraph';
import { IForgotPassword } from '@/types';

const ForgotPassword = ({
	loading,
	toggle,
	userEmail,
	register,
	handleSubmit,
	forgotPasswordRequest,
	onSubmit,
	forgotPasswordError,
	errors,
}: IForgotPassword) => {
	return (
		<div>
			<RightBlackPanel>
				{toggle ? (
					<div>
						<h1>Reset Password</h1>
						<div className='flex'>
							<p className='pt-3 pb-5 text-md text-gray'>
								If you have an account with us, we will send a
								password reset link to{' '}
								<span className='text-blue-200 font-bold'>
									{userEmail}
								</span>
							</p>
						</div>
						{!!forgotPasswordError && (
							<Paragraph type={'error'} className={'pt-3 mb-2'}>
								{forgotPasswordError?.message}
							</Paragraph>
						)}
						<div className='mb-2'>
							<div className='flex justify-center'>
								<Button
									disabled={loading}
									type='accent'
									onClick={() => forgotPasswordRequest()}
									loading={loading}
								>
									Resend
								</Button>
							</div>
						</div>
						<div className='flex'>
							<div>
								<p>Wrong email?</p>
							</div>
							<div className='text-blue-100 hover:text-blue-200'>
								<button
									onClick={() => window.location.reload()}
								>
									&nbsp;Enter different one!
								</button>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h1 className='text-xl'>Reset Password</h1>
						<p className='pt-0 sm:pt-[8px] pb-[15px] text-xs sm:text-base text-gray'>
							A request has been made to reset your password. If
							you made this request, add your email id to reset
							your password.
						</p>
						<form className='forgot-password-form flex-col'>
							<Input
								register={register('email')}
								type='primary'
								placeholder='Email'
								error={!!errors.email || !!forgotPasswordError}
							></Input>
							{!!errors.email && (
								<Paragraph
									type={'error'}
									className={'pt-3 px-3'}
								>
									{capitalizeFirstLetter(
										errors.email.message + '.'
									)}
								</Paragraph>
							)}
							{!!forgotPasswordError && (
								<Paragraph
									type={'error'}
									className={'pt-3 px-3'}
								>
									{forgotPasswordError?.message}
								</Paragraph>
							)}

							<div className='flex justify-center pt-9'>
								<Button
									disabled={loading}
									onClick={handleSubmit(onSubmit)}
									type='accent'
									loading={loading}
								>
									Reset Password
								</Button>
							</div>
							<div className='flex'>
								<div>
									<p>
										Didn&apos;t request to change your
										password?
									</p>
								</div>
								<div className='text-blue-100 hover:text-blue-200'>
									<li className='list-none'>
										<Link href='/login'>&nbsp;Login</Link>
									</li>
								</div>
							</div>
						</form>
					</div>
				)}
			</RightBlackPanel>
		</div>
	);
};

export default ForgotPassword;
