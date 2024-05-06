import Signup from '@/components/signup';
import BackgroundImage from '@/components/common/BackgroundImage';
import { useRequest } from '@/hooks/useRequest';
import APIs from '@/services/api';
import { useEffect, useState } from 'react';
// import useSession from '@/hooks/useSession';
import { useForm } from 'react-hook-form';
import { ISignupForm } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '@/schemas';
import useRandomImage from '@/hooks/useRandomImage';

const SignUpContainer = () => {
	const { selectedImage } = useRandomImage();
	const {
		doRequest: doSignupRequest,
		loading,
		error,
		statusCode,
	} = useRequest({ func: APIs.handleSignUp });
	const [displayPassword, setDisplayPassword] = useState<boolean>(false);
	// const { mutateSession, isValidating } = useSession({
	// 	middleware: 'guest',
	// });

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignupForm>({
		resolver: yupResolver(SignUpSchema),
	});

	const onSubmit = (data: ISignupForm) => {
		const { fullName } = data;
		data.name = fullName;
		return doSignupRequest(data);
	};

	// useEffect(() => {
	// 	if (statusCode === 200 || (statusCode === 204 && !error)) {
	// 		(async () => {
	// 			await mutateSession();
	// 		})();
	// 	}
	// }, [statusCode, error, mutateSession]);

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<Signup
					loading={loading || statusCode === 200}
					displayPassword={displayPassword}
					register={register}
					setDisplayPassword={setDisplayPassword}
					signUpServerErrors={error}
					errors={errors}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
				/>
			</BackgroundImage>
			<footer></footer>
		</div>
	);
};

export default SignUpContainer;
