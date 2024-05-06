import Login from '@/components/login';
import BackgroundImage from '@/components/common/BackgroundImage';
// import useSession from '@/hooks/useSession';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/schemas';
import { useEffect, useState } from 'react';
import { useRequest } from '@/hooks/useRequest';
import APIs from '@/services/api';
import useRandomImage from '@/hooks/useRandomImage';

const LoginContainer = () => {
	const { selectedImage } = useRandomImage();
	const {
		doRequest: doLoginRequest,
		loading,
		error,
		statusCode,
	} = useRequest({ func: APIs.handleLogin });
	const [displayPassword, setDisplayPassword] = useState<boolean>(false);
	// const { mutateSession, isValidating } = useSession({
	// 	middleware: 'guest',
	// });

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginForm>({
		resolver: yupResolver(LoginSchema),
	});

	const onSubmit = (data: ILoginForm) => {
		return doLoginRequest(data);
	};

	// useEffect(() => {
	// 	if (statusCode === 204 || (statusCode === 200 && !error)) {
	// 		(async () => {
	// 			await mutateSession();
	// 		})();
	// 	}
	// }, [statusCode, error, mutateSession]);

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<Login
					loading={loading}
					displayPassword={displayPassword}
					register={register}
					setDisplayPassword={setDisplayPassword}
					loginServerErrors={error}
					errors={errors}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					statusCode={statusCode}
				/>
			</BackgroundImage>
			<footer></footer>
		</div>
	);
};

export default LoginContainer;
