import BackgroundImage from '@/components/common/BackgroundImage';
import { useRequest } from '@/hooks/useRequest';
import APIs from '@/services/api';
import { useEffect } from 'react';
// import useSession from '@/hooks/useSession';
import { useForm } from 'react-hook-form';
import { IUpdateUser } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpAdditionalInfoSchema } from '@/schemas';
import useRandomImage from '@/hooks/useRandomImage';
import SignupAdditionalInfo from '@/components/signupAdditionalInfo';
import { useRouter } from 'next/router';

const SignUpAdditionalInfoContainer = () => {
	const router = useRouter();
	const { selectedImage } = useRandomImage();
	// const { user } = useSession({});
	const {
		doRequest: doSignupAdditionalInfoRequest,
		loading,
		error,
		statusCode,
	} = useRequest({ func: APIs.handleUpdateUser });
	// const { isValidating } = useSession({
	// 	middleware: 'guest',
	// });

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUpdateUser>({
		resolver: yupResolver(SignUpAdditionalInfoSchema),
	});

	const onSubmit = (data: IUpdateUser) => {
		return doSignupAdditionalInfoRequest(data);
	};

	useEffect(() => {
		if (statusCode === 200 || (statusCode === 204 && !error)) {
			router.push('/application-review');
		}
	}, [statusCode, error, router]);

	// useEffect(() => {
	// 	if (!user) {
	// 		router.push('/login');
	// 	}
	// }, [user, router]);

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<SignupAdditionalInfo
					loading={loading || statusCode === 200}
					register={register}
					yupErrors={errors}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
				/>
			</BackgroundImage>
			<footer></footer>
		</div>
	);
};

export default SignUpAdditionalInfoContainer;
