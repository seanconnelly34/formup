import BackgroundImage from '@/components/common/BackgroundImage';
import ForgotPassword from '@/components/forgotPassword';
import useRandomImage from '@/hooks/useRandomImage';
import { useRequest } from '@/hooks/useRequest';
import { ForgotPassSchema } from '@/schemas';
import APIs from '@/services/api';
import { IForgotPasswordForm } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ForgotPasswordContainer = () => {
	const { selectedImage } = useRandomImage();
	const [toggle, setToggle] = useState<boolean>(false);
	const [userEmail, setUserEmail] = useState<any>();

	const handleForgotPassword = (_email?: string) => {
		const email = _email || userEmail;
		return APIs.handleForgotPassword({ email });
	};

	const {
		doRequest: forgotPasswordRequest,
		response: forgotPasswordResponse,
		error: forgotPasswordError,
		loading,
	} = useRequest({ func: handleForgotPassword });
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForgotPasswordForm>({
		resolver: yupResolver(ForgotPassSchema),
	});

	const onSubmit = (data: IForgotPasswordForm) => {
		return forgotPasswordRequest(data.email).then(() =>
			setUserEmail(data.email)
		);
	};

	useEffect(() => {
		if (forgotPasswordResponse && !forgotPasswordError) {
			setToggle(true);
			toast.success('Request sent');
		}
	}, [forgotPasswordResponse, forgotPasswordError]);

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<ForgotPassword
					loading={loading}
					toggle={toggle}
					userEmail={userEmail}
					register={register}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					forgotPasswordError={forgotPasswordError}
					errors={errors}
					forgotPasswordRequest={forgotPasswordRequest}
				/>
			</BackgroundImage>
			<footer></footer>
		</div>
	);
};

export default ForgotPasswordContainer;
