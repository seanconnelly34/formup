import '../styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import { wrapper } from '@/store/store';
import '../styles/themes';
import useCSRF from '@/hooks/useCSRF';
import APIs from '@/services/api';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { hotjar } from 'react-hotjar';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface IAppProps extends AppProps {
	subdomain: string;
}

function App({ Component, pageProps }: IAppProps) {
	const [ready, setReady] = useState(false);
	const { query } = useRouter();
	const { org } = query;

	useCSRF();

	return (
		<>
			<Component {...pageProps} />
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme={'colored'}
			/>
		</>
	);
}

export default wrapper.withRedux(App);
