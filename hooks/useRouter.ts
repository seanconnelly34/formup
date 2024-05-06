import Router, { useRouter as useNextRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const useRouter = ({ allowPageReload }: { allowPageReload?: boolean }) => {
	const [loading, setLoading] = useState(false);
	const {
		asPath,
		isReady,
		push: nextPush,
		prefetch,
		query,
	} = useNextRouter();

	const push = useCallback(
		async (url: string, as?: string) => {
			if (!isReady) return console.log('router not ready');
			if (asPath === url && !allowPageReload)
				return console.log('already at route');
			return nextPush(url, as ?? '');
		},
		[allowPageReload, asPath, isReady, nextPush]
	);

	const startLoading = () => setLoading(true);
	const stopLoading = () => setLoading(false);

	useEffect(() => {
		Router.events.on('routeChangeStart', startLoading);
		Router.events.on('routeChangeComplete', stopLoading);
		Router.events.on('routeChangeError', stopLoading);
		return () => {
			Router.events.off('routeChangeStart', startLoading);
			Router.events.off('routeChangeComplete', stopLoading);
			Router.events.off('routeChangeError', stopLoading);
		};
	}, []);

	return {
		push,
		loading,
		prefetch,
		query,
		asPath,
	};
};

export default useRouter;
