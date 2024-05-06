import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
} from 'react-redux';

import type { AppDispatch, RootState } from '../store/store';

// @see https://redux.js.org/usage/usage-with-typescript

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
