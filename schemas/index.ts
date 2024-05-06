import * as yup from 'yup';

export const SignUpSchema = yup
	.object({
		fullName: yup.string().max(60).required(),
		email: yup.string().email().max(60).required(),
		password: yup
			.string()
			.max(60)
			.required()
			.matches(/^(?=.*[a-z])/, 'Must Contain one Lowercase character')
			.matches(/^(?=.*[A-Z])/, 'Must Contain one Uppercase character')
			.matches(/^(?=.*[0-9])/, 'Must Contain one Number')
			.matches(
				/^(?=.*[!@#\$%\^&\*])/,
				'Must Contain one Special Case Character'
			)
			.matches(/^(?=.{10,})/, 'Must Contain 10 Characters'),
		password_confirmation: yup
			.string()
			.label('confirm password')
			.required()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
		agreeToTerms: yup
			.boolean()
			.oneOf([true], 'Please agree to terms')
			.required(),
	})
	.required();

export const SignUpAdditionalInfoSchema = yup
	.object({
		bio: yup.string().max(600).required(),
		twitter: yup.string(),
		instagram: yup.string(),
		facebook: yup.string(),
		website: yup.string(),
	})
	.required();

export const LoginSchema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

export const ForgotPassSchema = yup
	.object({
		email: yup.string().required(),
	})
	.required();

export const ChangePasswordSchema = yup
	.object({
		current_password: yup.string().required(),
		password: yup
			.string()
			.max(60)
			.required()
			.matches(/^(?=.*[a-z])/, 'Must Contain one Lowercase character')
			.matches(/^(?=.*[A-Z])/, 'Must Contain one Uppercase character')
			.matches(/^(?=.*[0-9])/, 'Must Contain one Number')
			.matches(
				/^(?=.*[!@#\$%\^&\*])/,
				'Must Contain one Special Case Character'
			)
			.matches(/^(?=.{10,})/, 'Must Contain 10 Characters'),
		password_confirmation: yup
			.string()
			.label('confirm password')
			.required()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})
	.required();

export const ResetForgottenPasswordSchema = yup
	.object({
		password: yup
			.string()
			.max(60)
			.required()
			.matches(/^(?=.*[a-z])/, 'Must Contain one Lowercase character')
			.matches(/^(?=.*[A-Z])/, 'Must Contain one Uppercase character')
			.matches(/^(?=.*[0-9])/, 'Must Contain one Number')
			.matches(
				/^(?=.*[!@#\$%\^&\*])/,
				'Must Contain one Special Case Character'
			)
			.matches(/^(?=.{10,})/, 'Must Contain 10 Characters'),
		password_confirmation: yup
			.string()
			.label('confirm password')
			.required()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})
	.required();

export const ChangeNameSchema = yup
	.object({
		name: yup.string().required(),
	})
	.required();

export const AddDetailsSchema = yup
	.object({
		name: yup.string().max(100).required(),
	})
	.required();
