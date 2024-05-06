import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SAMPLE_FORM_TYPES } from '@/utils';
import { EConsentFormData } from '@/utils/EConsentFormData';

export const canvasFormSlice = createSlice({
	name: 'walletModal',
	initialState: {
		form: EConsentFormData,
	},
	reducers: {
		setCanvasForm(state, action: PayloadAction<string>) {
			let tempForm: any | null;
			if (action.payload === SAMPLE_FORM_TYPES.ElectronicConsent) {
				tempForm = EConsentFormData;
			}
			state.form = tempForm;
		},
	},
});

export const { setCanvasForm } = canvasFormSlice.actions;

export default canvasFormSlice.reducer;
