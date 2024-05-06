import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import loginModalSlice from './loginModalSlice';
import formElementsSlice from './formElementsSlice';
import canvasFormSlice from './canvasFormSlice';

type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

const makeStore = () =>
	configureStore({
		reducer: {
			loginModal: loginModalSlice,
			canvasForm: canvasFormSlice,
			formElements: formElementsSlice,
		},
		devTools: true,
	});

export const wrapper = createWrapper(makeStore);
