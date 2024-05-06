import BackgroundImage from '../../components/common/BackgroundImage';
import { useEffect, useState } from 'react';
import useRandomImage from '@/hooks/useRandomImage';
import VerifiedEmail from '@/components/verifyEmail/VerifiedEmail';
import { useRouter } from 'next/router';
import APIs, { Axios } from '@/services/api';
import { useRequest } from '@/hooks/useRequest';
import { IForgotPasswordForm } from '@/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPassSchema } from '@/schemas';

const EmailVerified = () => {
	const { selectedImage } = useRandomImage();
	const router = useRouter();
	const { query } = useRouter();
	const [userEmail, setUserEmail] = useState<any>();
	const [login, setLogin] = useState<boolean>(false);

	const { doRequest, response, loading, error, statusCode } = useRequest({
		func: () =>
			Axios.get(new Buffer(query.data as string, 'base64').toString()),
	});

	const handleForgotPassword = (_email?: string) => {
		const email = _email || userEmail;
		return APIs.handleForgotPassword({ email });
	};

	const {
		doRequest: forgotPasswordRequest,
		response: forgotPasswordResponse,
		error: forgotPasswordError,
		loading: loadingForgotPassword,
	} = useRequest({ func: handleForgotPassword });

	const {
		register,
		handleSubmit,
		formState: { errors: yupErrors },
	} = useForm<IForgotPasswordForm>({
		resolver: yupResolver(ForgotPassSchema),
	});

	const onSubmit = (data: IForgotPasswordForm) => {
		return forgotPasswordRequest(data.email).then(() =>
			setUserEmail(data.email)
		);
	};

	useEffect(() => {
		if (
			!response &&
			!error &&
			!loading &&
			statusCode !== 200 &&
			!!query?.data
		) {
			(async () => {
				await doRequest();
			})();
		}
	}, [statusCode, doRequest, response, error, loading, query?.data]);

	useEffect(() => {
		if (login) {
			router.push('/login');
		}
	}, [login, router]);

	const handleLoginRedirect = () => {
		setLogin(true);
	};

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<VerifiedEmail
					register={register}
					forgotPasswordResponse={forgotPasswordResponse}
					forgotPasswordError={forgotPasswordError}
					loadingForgotPassword={loadingForgotPassword}
					handleLoginRedirect={handleLoginRedirect}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					yupErrors={yupErrors}
					loadingVerificationLink={loading}
					statusCode={statusCode}
				/>
			</BackgroundImage>

			<footer></footer>
		</div>
	);
};
export default EmailVerified;
