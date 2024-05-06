import axios, { AxiosInstance } from 'axios';
import {
	ISignupForm,
	IForgotPasswordForm,
	ILoginForm,
	IChangePassword,
	IWalletAddress,
	IUpdateUser,
	IRegisterWallet,
	IVerifyWallet,
} from '@/types';

export const Axios: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json',

	},
	withCredentials: true,
});

const setOrganizationHeader = async (subdomain: string) => {
	return new Promise((resolve) => {
		Axios.defaults.headers['X-Organization'] = subdomain;
		resolve(true);
	});
};

const handleSignUp = (payload: ISignupForm) => {
	return Axios.post('/api/register', payload);
};

const handleLogin = (payload: ILoginForm) => {
	return Axios.post('/api/login', payload);
};

const handleForgotPassword = (payload: IForgotPasswordForm) => {
	return Axios.post('/api/forgot-password', payload);
};

const handleResetPassword = (payload: IChangePassword) => {
	return Axios.put('/api/user/password', payload);
};

const handleResetForgottenPassword = (payload: IChangePassword) => {
	return Axios.post('/api/reset-password', payload);
};

const handleUpdateUser = (payload: IUpdateUser) => {
	return Axios.put('/api/user/profile-information', payload);
};

const handleLogout = () => {
	return Axios.post('api/logout');
};
const handleAddress = (payload: IWalletAddress) => {
	return Axios.post('api/wallets', payload);
};

const handleResendConfirmationEmail = () => {
	return Axios.post('api/email/verification-notification');
};

const handleRegisterWallet = (payload: IRegisterWallet) => {
	return Axios.post('/api/wallets/register', {
		address: payload.address,
	});
};

const handleReadyWallet = (payload: IRegisterWallet) => {
	return Axios.post('/api/wallets/ready', {
		address: payload.address,
	});
};

const handleVerifyWallet = (payload: IVerifyWallet) => {
	return Axios.post('/api/wallets/verify', {
		address: payload.address,
		signed_verification_code: payload.signed_verification_code,
	});
};

const handleCreateCollection = (payload: any) => {
	return Axios.post('api/collections', payload);
};

const APIs = {
	setOrganizationHeader,
	handleSignUp,
	handleLogin,
	handleForgotPassword,
	handleResetPassword,
	handleResetForgottenPassword,
	handleLogout,
	handleAddress,
	handleResendConfirmationEmail,
	handleUpdateUser,
	handleRegisterWallet,
	handleVerifyWallet,
	handleReadyWallet,
	handleCreateCollection,
};

export default APIs;
