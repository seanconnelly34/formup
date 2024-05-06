import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Paragraph from '@/components/common/Paragraph';
import Button from '../common/Button';

interface IApplicationReview {
	resendLink: boolean;
	handleResendLink: () => void;
}

const ApplicationReview = ({
	resendLink,
	handleResendLink,
}: IApplicationReview) => {
	return (
		<RightBlackPanel>
			<div className='flex flex-col h-[300px]'>
				<h1 className='text-xl mt-16 leading-[35px]'>
					Thanks for signing up <br />
					please verify your email address
				</h1>
				{resendLink && (
					<Paragraph type='base' className='py-4'>
						We sent you an email, please check your inbox.
					</Paragraph>
				)}
				<Button
					disabled={resendLink}
					type='accent'
					onClick={handleResendLink}
					className='mt-auto'
				>
					Resend
				</Button>
			</div>
		</RightBlackPanel>
	);
};

export default ApplicationReview;
