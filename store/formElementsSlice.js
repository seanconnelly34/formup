import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { IFormElements } from '@/types';
import { TEXT_STYLES } from '@/utils';

export const formElementsSlice = createSlice({
	name: 'walletModal',
	initialState: {
		formElements: {
			[uuid()]: [],
		},
	},
	reducers: {
		setFormElements(state, action) {
			state.formElements = action.payload;
		},
		setInputValues(state, action) {
			const { id, list, value } = action.payload;
			const updatedObject = state.formElements[list];
			// const {
			// 	style: { bold, italic, underline },
			// } = state.formElements[list];
			// @ts-ignore
			const updatedElement = updatedObject.find((el) => el.id === id);
			// console.log('VAL-redux', value);
			// @ts-ignore
			console.log('REDUX VALUR', value);
			updatedElement.value = value;
			// console.log('HUH', current(updatedElement));
			// @ts-ignore
			// const removeNewLines = updatedElement.value;
			// @ts-ignore
			// updatedElement.tempValue = removeNewLines.replace(/\n+$/, '');
		},
		setTextAreaInputHeight(state, action) {
			const { id, list, textAreaHeight } = action.payload;
			const updatedObject = state.formElements[list];
			// @ts-ignore
			const updatedElement = updatedObject.find((el) => el.id === id);
			updatedObject[0].height = textAreaHeight;
			// @ts-ignore
			updatedElement.height = textAreaHeight;
			// state.formElements = {
			// 	...state.formElements,
			// 	[list]: updatedObject,
			// };
		},
		setRequiredField(state, action) {
			const { id, list, required } = action.payload;
			const updatedObject = state.formElements[list];
			// @ts-ignore
			const updatedElement = updatedObject.find((el) => el.id === id);

			// @ts-ignore
			updatedElement.required = !required;
		},
		setTextSize(state, action) {
			const { id, list, size } = action.payload;
			const updatedObject = state.formElements[list];
			// @ts-ignore
			const updatedElement = updatedObject.find((el) => el.id === id);

			// @ts-ignore
			updatedElement.style.size = size;
		},
		removeTextAreaLineBreaks(state, action) {
			const { id, list, tempScrollHeight } = action.payload;
			const updatedObject = state.formElements[list];
			// @ts-ignore
			const updatedElement = updatedObject.find((el) => el.id === id);
			// @ts-ignore
			const removeNewLines = updatedElement.value;
			// @ts-ignore
			updatedElement.value = removeNewLines.replace(/\n+$/, '');
			// @ts-ignore
			updatedElement.height =
				tempScrollHeight + updatedElement.style.size;
		},
		setTextAreaStyle(state, action) {
			const { id, list, style } = action.payload;
			const updatedObject = state.formElements[list];
			// @ts-ignore
			const updatedElement = updatedObject.find((el) => el.id === id);
			// console.log('fuk', current(updatedElement));
			// if (
			// 	style !== TEXT_STYLES.unorderedList ||
			// 	style !== TEXT_STYLES.orderedList
			// ) {
			// @ts-ignore
			updatedElement.style[style] = !updatedElement.style[style];
			// } else {
			// 	// @ts-ignore
			// 	updatedElement.style[style] = style;
			// }
			// console.log('fuk', current(updatedElement));
		},
	},
});

export const {
	setFormElements,
	setInputValues,
	setTextAreaInputHeight,
	setRequiredField,
	setTextSize,
	removeTextAreaLineBreaks,
	setTextAreaStyle,
} = formElementsSlice.actions;

export default formElementsSlice.reducer;
