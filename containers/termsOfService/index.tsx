import SignUpHeader from '@/components/signup/SignUpHeader';
import TermsOfServiceText from '../../components/TermsOfServiceText';

const TermsOfServiceContainer = () => {
	return (
		<div>
			<div className='max-w-screen-lg m-auto'>
				<SignUpHeader />
			</div>
			<TermsOfServiceText />

			<footer></footer>
		</div>
	);
};

export default TermsOfServiceContainer;
