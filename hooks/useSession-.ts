import useSWR from 'swr';
import APIs, { Axios } from '@/services/api';
import { useCallback, useEffect } from 'react';
import { ILoginForm } from '@/types';
import useRouter from '@/hooks/useRouter';
import { hotjar } from 'react-hotjar';

type middleware = 'guest' | 'auth' | 'passive';

interface ISessionHook {
	middleware?: middleware;
	shouldMutateOnMount?: boolean;
}

type TOrg = {
	name: string;
	subdomain: string;
};

interface IUser {
	billing_address: string;
	current_organization: TOrg[];
	billing_address_line_2: string;
	billing_city: string;
	billing_country: string;
	billing_postal_code: string;
	billing_state: string;
	email: string;
	email_verified_at: string;
	extra_billing_information: string;
	id: string;
	name: string;
	pm_expiration: string;
	pm_last_four: string;
	pm_type: string;
}

interface IUseSessionResponse {
	data: IUser;
}

const useSession = ({ middleware, shouldMutateOnMount }: ISessionHook) => {
	const { push } = useRouter({});
	const {
		data: SWRResponse,
		error,
		mutate,
		isValidating,
	} = useSWR<IUseSessionResponse>(
		'/api/users/me?include=currentOrganization',
		Axios,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
			revalidateOnMount: shouldMutateOnMount,
			shouldRetryOnError: false,
		}
	);

	useEffect(() => {
		if (SWRResponse && hotjar.initialized()) {
			hotjar.identify('USER_ID', {
				userProperty: SWRResponse?.data?.id || 'unknown-debug-needed',
			});
		}
	}, [SWRResponse]);

	const handleRouting: () => void = useCallback(async () => {
		if (middleware !== 'passive' && SWRResponse && !error) {
			if (!SWRResponse.data.email_verified_at) {
				await push('/additional-info');
				return true;
			} else if (!SWRResponse.data.email_verified_at) {
				await push('/verify/pending');
				return true;
			}
		}
		if (middleware === 'guest' && SWRResponse && !error) {
			if (
				SWRResponse.data.email_verified_at &&
				!error?.response?.status
			) {
				await push('/dashboard');
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
	}, [middleware, SWRResponse, error, push]);

	useEffect(() => {
		handleRouting();
		return () => handleRouting();
	}, [handleRouting]);

	const login = useCallback(
		async (payload: ILoginForm) => {
			await APIs.handleLogin(payload);
			await mutate();
		},
		[mutate]
	);

	const logout = useCallback(async () => {
		await APIs.handleLogout();
		await mutate();
	}, [mutate]);

	useEffect(() => {
		if (SWRResponse) {
			const currentXOrg = Axios.defaults.headers['X-Organization'];

			if (
				currentXOrg &&
				SWRResponse.data?.current_organization?.[0]?.subdomain !==
					currentXOrg
			) {
				(async () => {
					await logout();
				})();
			}
		}
	}, [SWRResponse, logout]);

	return {
		login,
		logout,
		user: SWRResponse?.data || null,
		error,
		mutateSession: mutate,
		isValidating,
	};
};

export default useSession;
