import Input from '@/components/common/Input';
import _ from 'lodash';
import { capitalizeFirstLetter } from '@/utils';
import Button from '@/components/common/Button';

interface IModalProps {
	handleSubmit: any;
	submit: any;
	errors: any;
	error: any;
	register: any;
	loading: boolean;
}

const inputDivs = 'pt-[18px] relative';
const errorStyles = 'w-full pt-3 px-3 text-sm text-red';
const requiredStyles = 'absolute left-0 top-7 text-red';

const ChangePasswordModal = ({
	errors,
	error,
	register,
	handleSubmit,
	submit,
	loading,
}: IModalProps) => {
	return (
		<div className='p-10 '>
			<h1 className='text-[22px] text-center'>Change Password</h1>
			<form className='flex-col '>
				<div className={inputDivs}>
					<Input
						HTMLType='password'
						placeholder='Current Password'
						register={register('current_password')}
					/>
					<p className={requiredStyles}>*</p>
					{!_.isNull(errors.current_password) && (
						<p className={errorStyles}>
							{errors?.current_password &&
								'Password is a required field'}
						</p>
					)}
					{error?.errors.current_password && (
						<p className={errorStyles}>
							{error.errors.current_password[0]}
						</p>
					)}
				</div>
				<div className={inputDivs}>
					<Input
						HTMLType='password'
						placeholder='New Password'
						register={register('password')}
					/>
					<p className={requiredStyles}>*</p>
					{!_.isNull(errors.password_confirmation) && (
						<p className={errorStyles}>
							{errors?.password_confirmation &&
								capitalizeFirstLetter(
									errors.password_confirmation.message
								)}
						</p>
					)}
					{errors?.password?.message?.length > 0 && (
						<p className={errorStyles}>{errors.password.message}</p>
					)}
				</div>
				<div className={inputDivs}>
					<Input
						HTMLType='password'
						placeholder='Confirm New Password'
						register={register('password_confirmation')}
					/>
					<p className={requiredStyles}>*</p>

					{!_.isNull(errors.password_confirmation) && (
						<p className={errorStyles}>
							{errors?.password_confirmation &&
								capitalizeFirstLetter(
									errors.password_confirmation.message
								)}
						</p>
					)}
				</div>
				<Button
					disabled={loading}
					className='mt-10'
					onClick={handleSubmit(submit)}
					loading={loading}
				>
					SAVE
				</Button>
			</form>
		</div>
	);
};

export default ChangePasswordModal;
