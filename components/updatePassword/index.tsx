import Button from '../common/Button';
import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import GreenCheck from '../../assets/green-check.svg';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Paragraph from '@/components/common/Paragraph';
import SuccessBanner from '../dashboard/SuccessBanner';
import Image from 'next/image';
import ShowPassword from '@/assets/showPassword.svg';
import HidePassword from '@/assets/hidePassword.svg';

const inputDivs = 'pt-[18px] relative';
const errorStyles = 'w-full pt-3 px-3 text-sm text-red capitalize';
const requiredStyles = 'absolute left-0 top-7 text-red';

export interface IUpdatePassword {
	showPasswordSuccessBanner: boolean;
	successfulReset: boolean | undefined;
	register: any;
	handleSubmit: any;
	onSubmit: any;
	resetPasswordLoading: boolean;
	resetPasswordResponseErrors: any;
	changePasswordFormErrors: any;
	handleRedirect: any;
	toggleViewPassword: any;
	displayPassword: boolean;
}
const UpdatePassword = ({
	showPasswordSuccessBanner,
	successfulReset,
	register,
	handleSubmit,
	onSubmit,
	resetPasswordLoading,
	resetPasswordResponseErrors,
	changePasswordFormErrors,
	handleRedirect,
	toggleViewPassword,
	displayPassword,
}: IUpdatePassword) => {
	return (
		<div>
			<RightBlackPanel>
				<SuccessBanner
					show={showPasswordSuccessBanner}
					color='bg-green-100'
					icon={GreenCheck}
					message={'Your password has been changed!'}
				/>

				<div>
					<h1>
						{successfulReset
							? 'Password Reset'
							: 'Set New Password'}
					</h1>
					<div className='flex'>
						<p className='pt-3 pb-5 text-md text-gray'>
							{successfulReset
								? 'Your password has been successfully reset. Click below to login.'
								: 'Your new password must be different from your previous used passwords. Include a special character, uppercase, lowercase, a number and a minimum length of 10.'}
						</p>
					</div>
					{successfulReset ? (
						<Button className='mt-10' onClick={handleRedirect}>
							Login
						</Button>
					) : (
						<form className='flex-col'>
							<div className={inputDivs}>
								<Input
									HTMLType={
										displayPassword ? 'text' : 'password'
									}
									placeholder='New Password'
									register={register('password')}
									error={
										!!changePasswordFormErrors?.password ||
										!!resetPasswordResponseErrors?.message
									}
								/>
								<p className={requiredStyles}>*</p>
								<Image
									src={
										displayPassword
											? ShowPassword
											: HidePassword
									}
									className={'absolute right-[13px] top-9'}
									alt='eye icon next decentrum'
									onClick={toggleViewPassword}
								/>
								{changePasswordFormErrors?.password && (
									<Paragraph
										type='warning'
										className={errorStyles}
									>
										{
											changePasswordFormErrors.password
												.message
										}
									</Paragraph>
								)}
							</div>
							<div className={inputDivs}>
								<Input
									HTMLType={
										displayPassword ? 'text' : 'password'
									}
									placeholder='Confirm New Password'
									register={register('password_confirmation')}
									error={
										!!changePasswordFormErrors?.password_confirmation ||
										!!resetPasswordResponseErrors?.message
									}
								/>
								<p className={requiredStyles}>*</p>
								<Image
									src={
										displayPassword
											? ShowPassword
											: HidePassword
									}
									className={'absolute right-[13px] top-9'}
									alt='eye icon next decentrum'
									onClick={toggleViewPassword}
								/>
								{changePasswordFormErrors?.password_confirmation && (
									<Paragraph
										type='warning'
										className={errorStyles}
									>
										{
											changePasswordFormErrors
												.password_confirmation.message
										}
									</Paragraph>
								)}
								{resetPasswordResponseErrors && (
									<Paragraph
										type='warning'
										className={errorStyles}
									>
										{resetPasswordResponseErrors.message}
									</Paragraph>
								)}
							</div>

							<Button
								disabled={resetPasswordLoading}
								className='mt-10'
								onClick={handleSubmit(onSubmit)}
								loading={resetPasswordLoading}
							>
								Reset Password
							</Button>
							<div className='flex'>
								<div>
									<p>Didn&apos;t request this? Go to</p>
								</div>
								<div className='text-blue-100 hover:text-blue-200'>
									<li className='list-none'>
										<Link href='/login'>&nbsp;Sign in</Link>
									</li>
								</div>
							</div>
						</form>
					)}
				</div>
			</RightBlackPanel>
		</div>
	);
};

export default UpdatePassword;
