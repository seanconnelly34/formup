import BackgroundImage from '@/components/common/BackgroundImage';
import UpdatePassword from '@/components/updatePassword';
import useRandomImage from '@/hooks/useRandomImage';
import { useRequest } from '@/hooks/useRequest';
import { ResetForgottenPasswordSchema } from '@/schemas';
import APIs from '@/services/api';
import { IResetForgottenPassword } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UpdatePasswordContainer = () => {
	const { selectedImage } = useRandomImage();
	const { query } = useRouter();
	const router = useRouter();
	const [displayPassword, setDisplayPassword] = useState<boolean>(false);
	const [showPasswordSuccessBanner, setShowPasswordSuccessBanner] =
		useState<boolean>(false);

	const [successfulReset, setSuccessfulReset] = useState<boolean>();

	const {
		doRequest: sendPasswordReset,
		loading: resetPasswordLoading,
		error: resetPasswordResponseErrors,
		statusCode: resetPasswordStatusCode,
	} = useRequest({ func: APIs.handleResetForgottenPassword });

	const {
		register,
		handleSubmit,
		formState: { errors: changePasswordFormErrors },
	} = useForm<IResetForgottenPassword>({
		resolver: yupResolver(ResetForgottenPasswordSchema),
	});

	const onSubmit = (data: any) => {
		data.token = query?.token;
		data.email = query?.email;

		return sendPasswordReset(data);
	};

	useEffect(() => {
		if (
			resetPasswordStatusCode === 200 ||
			resetPasswordStatusCode === 201
		) {
			setShowPasswordSuccessBanner(true);
			setSuccessfulReset(true);
		}
	}, [resetPasswordStatusCode]);

	const handleRedirect = () => {
		router.push('/login');
	};

	const toggleViewPassword = () => {
		setDisplayPassword(!displayPassword);
	};

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<UpdatePassword
					showPasswordSuccessBanner={showPasswordSuccessBanner}
					successfulReset={successfulReset}
					register={register}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					resetPasswordLoading={resetPasswordLoading}
					resetPasswordResponseErrors={resetPasswordResponseErrors}
					changePasswordFormErrors={changePasswordFormErrors}
					handleRedirect={handleRedirect}
					toggleViewPassword={toggleViewPassword}
					displayPassword={displayPassword}
				/>
			</BackgroundImage>
			<footer></footer>
		</div>
	);
};

export default UpdatePasswordContainer;
