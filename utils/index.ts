import _ from 'lodash';
import {
	faAt,
	faFile,
	faCircleDot,
	faSquareCheck,
	faSquareCaretDown,
	faParagraph,
	faSignature,
	faHeading,
	faFilePen,
	faFileText,
	faPhone,
	faLocationDot,
	faArrowsLeftRightToLine,
	faImage,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';

export const capitalizeFirstLetter = (string: string | undefined) =>
	_.capitalize(string);

export const SAMPLE_FORM_TYPES = { ElectronicConsent: 'EConsent' };

export const ELEMENT_TYPES = {
	text: 'Text Edit',
	add_image: 'Add Image',
	user_input: 'User Input',
	email: 'Email',
	phone: 'Phone',
	address: 'Address',
	file: 'File Upload',
	radio: 'Radio',
	checkbox: 'Checkbox',
	dropdown: 'Dropdown',
	signature: 'Signature',
	space: 'Space',
};
export const DRAGGABLE_FORM_ELEMENTS = [
	{
		id: uuid(),
		content: ELEMENT_TYPES.text,
		icon: faFilePen,
		meta: ELEMENT_TYPES.text,
		placeholder: ELEMENT_TYPES.text,
		value: 'Text Edit',
		position: { row: null, order: null },
		style: {
			size: 20,
		},
	},

	{
		id: uuid(),
		content: ELEMENT_TYPES.add_image,
		icon: faImage,
		meta: ELEMENT_TYPES.add_image,
		placeholder: ELEMENT_TYPES.add_image,
		value: '',
		position: { row: null, order: null },
		height: '',
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.user_input,
		icon: faFileText,
		meta: ELEMENT_TYPES.user_input,
		placeholder: 'User Input ie. (First Name)',
		required: false,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.email,
		icon: faAt,
		meta: ELEMENT_TYPES.email,
		required: true,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.phone,
		icon: faPhone,
		meta: ELEMENT_TYPES.phone,
		required: true,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.address,
		icon: faLocationDot,
		meta: ELEMENT_TYPES.address,
		required: true,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.file,
		icon: faFile,
		meta: ELEMENT_TYPES.file,
		required: false,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.radio,
		icon: faCircleDot,
		meta: ELEMENT_TYPES.radio,
		required: false,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.checkbox,
		icon: faSquareCheck,
		meta: ELEMENT_TYPES.checkbox,
		required: false,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.dropdown,
		icon: faSquareCaretDown,
		meta: ELEMENT_TYPES.dropdown,
		required: false,
		value: '',
		position: { row: null, order: null },
	},

	{
		id: uuid(),
		content: ELEMENT_TYPES.signature,
		icon: faSignature,
		meta: ELEMENT_TYPES.signature,
		required: true,
		value: '',
		position: { row: null, order: null },
	},
	{
		id: uuid(),
		content: ELEMENT_TYPES.space,
		icon: faArrowsLeftRightToLine,
		meta: ELEMENT_TYPES.space,
		required: true,
		value: '',
		position: { row: null, order: null },
	},
];

export const TEXT_STYLES = {
	bold: '600',
	italic: 'italic',
	underline: 'underline',
	unorderedList: 'ul',
	orderedList: 'ol',
};
