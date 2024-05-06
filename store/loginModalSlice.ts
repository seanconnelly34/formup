import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const loginModalSlice = createSlice({
	name: 'walletModal',
	initialState: {
		open: false,
	},
	reducers: {
		setOpenLoginModal(state, action: PayloadAction<boolean>) {
			state.open = action.payload;
		},
	},
});

export const { setOpenLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
