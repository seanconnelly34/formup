/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	async redirects() {
		return [
			// {
			// 	source: '/signup',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	destination: '/:org/signup',
			// 	permanent: true,
			// },
			// {
			// 	source: '/:org/user/dashboard',
			// 	destination: '/:org/user/dashboard/home',
			// 	permanent: true,
			// },
			// {
			// 	source: '/user/dashboard/:tab',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	permanent: true,
			// 	destination: '/:org/user/dashboard/:tab',
			// },
			// {
			// 	source: '/verify/pending',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	permanent: true,
			// 	destination: '/:org/verify/pending',
			// },
			// {
			// 	source: '/dashboard',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	permanent: true,
			// 	destination: '/:org/user/dashboard/home',
			// },
			// {
			// 	source: '/signup',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	permanent: true,
			// 	destination: '/:org/signup',
			// },
			// {
			// 	source: '/forgotpassword',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	permanent: true,
			// 	destination: '/:org/forgotpassword',
			// },
			// {
			// 	source: '/login',
			// 	has: [
			// 		{
			// 			type: 'cookie',
			// 			key: 'X-Organization',
			// 			value: '(?<org>.*)',
			// 		},
			// 	],
			// 	permanent: true,
			// 	destination: '/:org/login',
			// },
		];
	},
};

module.exports = nextConfig;
