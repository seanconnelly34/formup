import PrivacyPolicyText from '@/components/PrivacyPolicyText';
import SignUpHeader from '@/components/signup/SignUpHeader';

const PrivacyPolicyContainer = () => {
	return (
		<div>
			<div className='max-w-screen-lg m-auto'>
				<SignUpHeader />
			</div>
			<PrivacyPolicyText />

			<footer></footer>
		</div>
	);
};

export default PrivacyPolicyContainer;
