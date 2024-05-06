import RightBlackPanel from '@/containers/common/LeftBlackPanel';
import Paragraph from '@/components/common/Paragraph';
import SuccessBanner from '../dashboard/SuccessBanner';
import GreenCheck from '../../assets/green-check.svg';

const ApplicationReview = () => {
	return (
		<RightBlackPanel>
			<div className='mt-auto'>
				<SuccessBanner
					show={true}
					color='bg-green-100'
					icon={GreenCheck}
					message='Your application has been successfully submitted'
				/>
			</div>
			<h1 className='text-xl mt-16'>Hello there!</h1>
			<Paragraph type='white' className='pt-[8px] pb-40'>
				The Next Decentrum team will review your application and get
				back to you
			</Paragraph>
		</RightBlackPanel>
	);
};

export default ApplicationReview;
