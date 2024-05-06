import BackgroundImage from '../../components/common/BackgroundImage';
// import useSession from '@/hooks/useSession';
import { useEffect, useState } from 'react';
import useRouter from '@/hooks/useRouter';
import useRandomImage from '@/hooks/useRandomImage';
import VerifyEmail from '@/components/verifyEmail';

const ApplicationPendingContainer = () => {
	const { selectedImage } = useRandomImage();
	// const { push } = useRouter({});
	// const { user } = useSession({
	// 	middleware: 'auth',
	// });

	// useEffect(() => {
	// 	if (user?.email_verified_at) {
	// 		(async () => {
	// 			await push('/user/dashboard');
	// 		})();
	// 	}
	// }, [push, user]);

	const [resendLink, setResentLink] = useState<boolean>(false);

	const handleResendLink = () => {
		setResentLink(true);
	};

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<VerifyEmail
					resendLink={resendLink}
					handleResendLink={handleResendLink}
				/>
			</BackgroundImage>

			<footer></footer>
		</div>
	);
};
export default ApplicationPendingContainer;
