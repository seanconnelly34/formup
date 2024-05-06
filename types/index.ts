import { ReactNode } from 'react';

export enum ESubscriptionStatus {
	'incomplete' = 'incomplete',
	'incomplete_expired' = 'incomplete_expired',
	'active' = 'active',
	'trialing' = 'trialing',
}
export interface IFormElements {
	id: string;
	content: string;
	icon: any;
	meta: string;
	placeholder: string;
	value: string | number | boolean;
	height?: string | null | undefined;
	position: {
		row: number | null;
		order: number | null;
	};
	required?: boolean;
}

export interface ISidebarItem {
	url: string;
	title: string;
	icon: any;
	container: ReactNode;
}

export interface ISignupForm {
	name: string;
	fullName: string;
	email: string;
	password: string;
	password_confirmation: string;
	agreeToTerms: string;
}

export interface IAddDetails {
	organization_id: string;
	name: string;
	description: string;
	photo: any;
}

export interface IStripeSecretProp {
	uid: string;
}

export interface IUpdateStripeSub {
	uid: string;
	stripe_customer_id: string;
}
export interface IPersonalInfoBilling extends IStripeSecretProp {
	name: string;
	email: string;
}

export interface IForgotPasswordForm {
	email: string;
}

export interface ILoginForm {
	email: string;
	password: string;
}

export interface IEntity {
	body: string;
	ends_at: string;
	id: string;
	link: string;
	media: string;
	name: string;
	order: number;
	starts_at: string;
}

export interface IDropdown {
	children: any;
	trigger: any;
	open: boolean;
	styles: string | null;
}

export interface IWalletCard {
	children: any;
	image: any;
	address: string | undefined;
	name: string;
}

export interface IRegisterWallet {
	address: string;
}

export interface IVerifyWallet {
	address: string;
	signed_verification_code: string;
}
export interface IWalletAddress {
	wallet_id: string;
}

export interface IResetForgottenPassword {
	password: string;
	password_confirmation?: string;
}

export interface IChangePassword extends IResetForgottenPassword {
	current_password: string;
}

export interface IUpdateUser {
	name?: string;
	bio?: string;
	twitter?: string;
	instagram?: string;
	facebook?: string;
	website?: string;
}

export interface IChangeName {
	name: string;
	email?: string;
}

export interface ISubscriptionResponse {
	amount: string;
	currency: string;
	current_period_end: number;
	current_period_start: number;
	interval: string;
	status: string;
	trial_period_days: any;
}

export interface IForgotPassword {
	loading: boolean;
	toggle: boolean;
	userEmail: string;
	register: any;
	handleSubmit: any;
	onSubmit: any;
	forgotPasswordRequest: any;
	forgotPasswordError: any;
	errors: any;
}

/**
 * Middlewares to be used by useSession hook's handleRouting also uses for routing
 */
export type middleware = 'guest' | 'auth' | 'passive';

/**
 * Endpoints
 */
export enum EEndpoints {
	me = 'me',
}

export interface IHandleRoutingProps {
	middleware: middleware;
	SWRResponse: any;
	error: any;
	push: (url: string, as?: string) => Promise<boolean | void>;
}
