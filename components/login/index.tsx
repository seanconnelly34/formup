import Button from '../common/Button';
import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Loader from '../common/Loader';
import ShowPassword from '@/assets/showPassword.svg';
import HidePassword from '@/assets/hidePassword.svg';
import Image from 'next/image';
import _ from 'lodash';
import { capitalizeFirstLetter } from '@/utils';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Paragraph from '@/components/common/Paragraph';
import Checkbox from '@/components/common/Checkbox';

const Login = ({
	displayPassword,
	setDisplayPassword,
	register,
	handleSubmit,
	errors,
	onSubmit,
	loginServerErrors,
	loading,
	statusCode,
}: {
	loading: boolean;
	displayPassword: boolean;
	setDisplayPassword: any;
	loginServerErrors: any;
	register: any;
	handleSubmit: any;
	errors: any;
	onSubmit: any;
	statusCode: number | null;
}) => {
	const persistLoading = loading || statusCode === 200;
	return (
		<div>
			<RightBlackPanel>
				<h1 className='text-xl'>Login</h1>
				<p className='pt-0 sm:pt-[8px] pb-[15px] text-xs sm:text-base text-gray'>
					Sign into your account.
				</p>
				<form className='login-form flex-col'>
					<div className={'pt-[18px] relative'}>
						<Input
							register={register('email')}
							type='primary'
							placeholder='Email'
							error={
								!!errors.email || !!loginServerErrors?.errors
							}
						/>
						<p className={'absolute left-0 top-7 text-red'}>*</p>
						{!_.isNull(errors.email) ? (
							<Paragraph type={'error'} className={'pt-3 px-3'}>
								{errors?.email &&
									capitalizeFirstLetter(errors.email.message)}
							</Paragraph>
						) : null}
					</div>
					<div className={'pt-[18px] relative'}>
						<Input
							register={register('password')}
							type='primary'
							placeholder='Password'
							HTMLType={displayPassword ? 'text' : 'password'}
							error={
								!!errors.password || !!loginServerErrors?.errors
							}
						/>
						<p className={'absolute left-0 top-7 text-red'}>*</p>
						<Image
							src={displayPassword ? ShowPassword : HidePassword}
							className={'absolute right-[13px] top-9'}
							alt='eye icon next decentrum'
							onClick={() => setDisplayPassword(!displayPassword)}
						/>
						{!_.isNull(errors.password) ? (
							<Paragraph type={'error'} className={'pt-3 px-3'}>
								{errors?.password &&
									capitalizeFirstLetter(
										errors.password.message
									)}
							</Paragraph>
						) : null}
						{loginServerErrors ? (
							<Paragraph type={'error'} className={'pt-3 px-3'}>
								{loginServerErrors.message}
							</Paragraph>
						) : null}
					</div>

					<div className={'pt-[18px] flex flex-row'}>
						<Checkbox
							htmlFor='rememberMe'
							className={'w-1/2'}
							name={'rememberMe'}
							register={register}
						>
							Remember Me
						</Checkbox>
						<div className={'w-1/2 text-right'}>
							<Link href='/forgot-password'>
								<div className='text-gray hover:text-blue-200  text-sm leading-6 pb-1'>
									Forgot Password
								</div>
							</Link>
						</div>
					</div>

					<div className='flex justify-center pt-9'>
						<Button
							name={'loginSubmit'}
							disabled={persistLoading}
							onClick={handleSubmit(onSubmit)}
							loading={persistLoading}
						>
							SIGN IN
						</Button>
					</div>
					<div className='flex'>
						<div>
							<p>Don&apos;t have an account?</p>
						</div>
						<div className='text-blue-100 hover:text-blue-200'>
							<li className='list-none'>
								<Link href='/signup'>&nbsp;Signup</Link>
							</li>
						</div>
					</div>
				</form>
			</RightBlackPanel>
		</div>
	);
};

export default Login;
