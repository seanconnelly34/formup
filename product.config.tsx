import APIs, { Axios } from '@/services/api';
import { createContext, useContext } from 'react';
import { EEndpoints, IHandleRoutingProps } from '@/types';

/**
 * Endpoints used by useSession hook's handleRouting for routing
 */
const endpoints: Record<EEndpoints, string> = {
	me: '/api/users/me',
};

/**
 * Handle routing function that routes the user according to their `user` object value
 */
const handleRouting: ({
	middleware,
	SWRResponse,
	error,
	push,
}: IHandleRoutingProps) => Promise<any> = async ({
	middleware,
	SWRResponse,
	error,
	push,
}: IHandleRoutingProps) => {
	if (middleware !== 'passive' && SWRResponse && !error) {
		if (!SWRResponse.data.is_subscribed) {
			// await push('/additional-info');
			return true;
		} else if (!SWRResponse.data.email_verified_at) {
			await push('/verify/pending');
			return true;
		}
	}
	if (middleware === 'guest' && SWRResponse && !error) {
		if (
			SWRResponse.data.email_verified_at &&
			SWRResponse.data.is_subscribed &&
			!error?.response?.status
		) {
			await push('/user/dashboard');
			return true;
		}
	}
	if (middleware === 'auth') {
		if (error?.response?.status === 401) {
			await push('/login');
			return true;
		}
		if (error?.response?.status === 404) {
			await push('/404');
			return true;
		}
	}
};

/**
 * Main login function that should
 * 1. Log in the user
 * 2. Handle cookies/auth storage
 * 3. Refresh the user's session/info (mutate)
 * @param payload
 * @param mutate
 */
const doLogin = async (payload: any, mutate: any) => {
	await APIs.handleLogin(payload);
	await mutate();
};

/**
 * Main logout function that shoud
 * 1. Log the user out
 * 2. Handle cookies/auth storage clear
 * 3. Refresh the user's session/info (mutate)
 * @param mutate
 */
const doLogout = async (mutate: any) => {
	await APIs.handleLogout();
	await mutate();
};

/**
 * Return the Axios instance to be used by the product
 * @constructor
 */
const AxiosInstance = () => Axios;

/**
 * READONLY from here on down
 */
interface IConfigContext {
	doLogin: any;
	doLogout: any;
	handleRouting: any;
	endpoints: any;
	AxiosInstance: any;
}

const ConfigObject: IConfigContext = {
	doLogin,
	doLogout,
	handleRouting,
	AxiosInstance,
	endpoints,
};

const ConfigContext = createContext(ConfigObject);
export const ConfigProvider = ({ children }: any) => (
	<ConfigContext.Provider value={ConfigObject}>
		{children}
	</ConfigContext.Provider>
);
export const useProductConfig = () => useContext(ConfigContext);
