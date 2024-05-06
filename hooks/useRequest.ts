import { useCallback, useEffect, useState } from 'react';

export const useRequest = ({
	func,
	data,
}: {
	func: (values?: any) => Promise<{ data: any }>;
	data?: any;
}) => {
	const [response, setResponse] = useState<any>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState<any>(false);
	const [statusCode, setStatusCode] = useState<null | number>(null);

	const resetState = () => {
		setError(null);
		setResponse(null);
		setStatusCode(null);
	};

	const doRequest = useCallback(
		(_data?: any) => {
			resetState();
			setLoading(true);
			return func(data || _data)
				.then((e) => {
					setResponse(e.data);
					setLoading(false);
					setStatusCode(200);
				})
				.catch((e) => {
					setError(e?.response?.data || e);
					setLoading(false);
					setStatusCode(500);
				});
		},
		[data, func]
	);

	useEffect(() => {
		resetState();
		setLoading(false);
		return () => {
			resetState();
			setLoading(false);
		};
	}, []);

	return {
		doRequest,
		response,
		error,
		loading,
		statusCode,
	};
};
