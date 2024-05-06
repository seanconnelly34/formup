import useSWR from 'swr';
import { Axios } from '@/services/api';

const useCSRF = () => {
	const { data: csrf, error } = useSWR('/sanctum/csrf-cookie', Axios, {
		revalidateOnFocus: false,
	});
	return {
		csrf: csrf || null,
		error,
	};
};

export default useCSRF;
