import Button from '../common/Button';
import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Twitter from '@/assets/twitter-icn.svg';
import Instagram from '@/assets/instagram-icn.svg';
import Facebook from '@/assets/facebook-icn.svg';
import Website from '@/assets/website-icn.svg';
import Image from 'next/image';
import Input from '@/components/common/Input';
import TextArea from '../common/TextArea';
import Paragraph from '../common/Paragraph';

const iconStyles = 'absolute top-[47px] left-[12px]';
const SignupAdditionalInfo = ({
	register,
	handleSubmit,
	yupErrors,
	onSubmit,
	loading,
}: {
	register: any;
	handleSubmit: any;
	yupErrors: any;
	onSubmit: any;
	loading: boolean;
}) => {
	return (
		<RightBlackPanel>
			<h1 className='text-xl'>Add More Information</h1>
			<p className='pt-0 sm:pt-[8px] pb-[15px] text-xs sm:text-base text-gray'>
				Add additional information. Strengthen your profile
			</p>
			<form className='signup-form flex-col pb-20'>
				<div className={'pt-[18px] relative'}>
					<TextArea
						register={register('bio')}
						placeholder='About/Bio'
						error={!!yupErrors?.bio}
						rows='3'
					/>
					<p className={'absolute left-0 top-7 text-red'}>*</p>
					{!!yupErrors?.bio && (
						<Paragraph type={'error'} className={'pt-3 px-3'}>
							Add just a little somthing to stand out
						</Paragraph>
					)}
				</div>
				<div className={'pt-[30px] relative'}>
					<Input
						id='twitter'
						register={register('twitter')}
						placeholder='Twitter'
						type='icon'
					/>
					<Image
						src={Twitter}
						className={iconStyles}
						alt='Twitter icon next decentrum'
					/>
				</div>
				<div className={'pt-[30px] relative'}>
					<Input
						id='instagram'
						register={register('instagram')}
						placeholder='Instagram'
						type='icon'
					/>
					<Image
						src={Instagram}
						className={iconStyles}
						alt='Instagram icon next decentrum'
					/>
				</div>
				<div className={'pt-[30px] relative'}>
					<Input
						id='facebook'
						register={register('facebook')}
						placeholder='Facebook'
						type='icon'
					/>
					<Image
						src={Facebook}
						className={iconStyles}
						alt='Facebook icon next decentrum'
					/>
				</div>
				<div className={'pt-[30px] relative'}>
					<Input
						id='website'
						register={register('website')}
						placeholder='Website'
						type='icon'
					/>
					<Image
						src={Website}
						className={iconStyles}
						alt='Website icon next decentrum'
					/>
				</div>

				<div className='flex justify-center pt-9'>
					<Button
						name={'signupSubmit'}
						disabled={loading}
						onClick={handleSubmit(onSubmit)}
						loading={loading}
					>
						Continue
					</Button>
				</div>
			</form>
		</RightBlackPanel>
	);
};

export default SignupAdditionalInfo;
