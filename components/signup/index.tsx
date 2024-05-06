import Button from '../common/Button';
import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Loader from '../common/Loader';
import ShowPassword from '@/assets/showPassword.svg';
import HidePassword from '@/assets/hidePassword.svg';
import Image from 'next/image';
import { capitalizeFirstLetter } from '@/utils';
import Input from '@/components/common/Input';
import Paragraph from '@/components/common/Paragraph';
import Checkbox from '@/components/common/Checkbox';
import Link from 'next/link';

const Signup = ({
	displayPassword,
	setDisplayPassword,
	register,
	handleSubmit,
	errors,
	onSubmit,
	signUpServerErrors,
	loading,
}: {
	loading: boolean;
	displayPassword: boolean;
	setDisplayPassword: any;
	signUpServerErrors: any;
	register: any;
	handleSubmit: any;
	errors: any;
	onSubmit: any;
}) => {
	return (
		<RightBlackPanel>
			<h1 className='text-xl'>Create account</h1>
			<p className='pt-0 sm:pt-[8px] pb-[15px] text-xs sm:text-base text-gray'>
				Add your details to create your account
			</p>
			<form className='signup-form flex-col'>
				<div className={'pt-[18px] relative'}>
					<Input
						register={register('fullName')}
						placeholder='Full Name'
						error={
							!!errors.fullName ||
							!!signUpServerErrors?.errors?.firstName
						}
					/>
					<p className={'absolute left-0 top-7 text-red'}>*</p>
					{!!errors.fullName && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							Full Name is required
						</Paragraph>
					)}
					{!!signUpServerErrors?.errors?.firstName && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							{signUpServerErrors.errors?.firstName}
						</Paragraph>
					)}
				</div>
				<div className={'pt-[18px] relative'}>
					<Input
						register={register('email')}
						placeholder='Email'
						error={
							!!errors.email ||
							!!signUpServerErrors?.errors?.email
						}
					/>
					<p className={'absolute left-0 top-7 text-red'}>*</p>
					{!!errors.email && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							{capitalizeFirstLetter(errors.email.message)}
						</Paragraph>
					)}
					{!!signUpServerErrors?.errors?.email && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							An account already exists with this email
						</Paragraph>
					)}
				</div>
				<div className={'pt-[18px] relative'}>
					<Input
						id='password'
						register={register('password')}
						placeholder='Password'
						HTMLType={displayPassword ? 'text' : 'password'}
						error={
							!!errors.password ||
							!!signUpServerErrors?.errors?.password
						}
					/>
					<p className={'absolute left-0 top-7 text-red'}>*</p>
					<Image
						src={displayPassword ? ShowPassword : HidePassword}
						className={'absolute right-[13px] top-9'}
						alt='eye icon next decentrum'
						onClick={() => setDisplayPassword(!displayPassword)}
					/>
					{!!errors.password && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							{capitalizeFirstLetter(errors.password.message)}
						</Paragraph>
					)}
					{!!signUpServerErrors?.errors?.password && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							{signUpServerErrors.errors?.password}
						</Paragraph>
					)}
				</div>
				<div className={'pt-[18px] relative'}>
					<Input
						register={register('password_confirmation')}
						placeholder='Confirm Password'
						HTMLType={displayPassword ? 'text' : 'password'}
						error={!!errors.password_confirmation}
					/>
					<p className={'absolute left-0 top-7 text-red'}>*</p>
					<Image
						src={displayPassword ? ShowPassword : HidePassword}
						className={'absolute right-[13px] top-9'}
						alt='eye icon next decentrum'
						onClick={() => setDisplayPassword(!displayPassword)}
					/>
					{!!errors.password_confirmation && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							{capitalizeFirstLetter(
								errors.password_confirmation.message
							)}
						</Paragraph>
					)}
				</div>
				<div className={'pt-4'}>
					<Checkbox
						htmlFor='opted_in'
						name={'opted_in'}
						register={register}
					>
						Get emails from Momentable about product updates,
						special offers, industry news, and events. You can
						unsubscribe at any time. View our{' '}
						<span className='white-links'>
							<Link href='/privacy-policy'>Privacy Policy</Link>
						</span>{' '}
						or Contact Us.
					</Checkbox>
				</div>
				<div className={'pt-4'}>
					<Checkbox
						htmlFor='agreeToTerms'
						name={'agreeToTerms'}
						register={register}
					>
						By submitting this form, you agree to Exhibyt&apos;s{' '}
						<span className='white-links'>
							<Link href='/terms-of-service'>
								Terms of Service
							</Link>
						</span>{' '}
						and
						<span className='white-links'>
							<Link href='/privacy-policy'> Privacy Policy</Link>
						</span>
					</Checkbox>
				</div>

				{!!errors.agreeToTerms && (
					<Paragraph type={'error'} className={'pt-3 px-3'}>
						{capitalizeFirstLetter(errors.agreeToTerms.message)}
					</Paragraph>
				)}

				{!!signUpServerErrors && (
					<Paragraph type={'error'} className={'pt-3 px-3'}>
						{signUpServerErrors?.message}
					</Paragraph>
				)}
				<div className='flex justify-center pt-9'>
					<Button
						name={'signupSubmit'}
						disabled={loading}
						onClick={handleSubmit(onSubmit)}
						loading={loading}
					>
						Get Started
					</Button>
				</div>
				<div className='flex pb-10'>
					<div>
						<p>Already have an account?</p>
					</div>
					<div className='text-blue-100 hover:text-blue-200'>
						<li className='list-none'>
							<Link href='/login'>&nbsp;Login</Link>
						</li>
					</div>
				</div>
			</form>
		</RightBlackPanel>
	);
};

export default Signup;
