import { SAMPLE_FORM_TYPES } from '../../utils';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import { setCanvasForm } from '@/store/canvasFormSlice';

const SubNav = () => {
	const dispatch = useDispatch();
	const handleGetLocalForm = (formType: string) => {
		dispatch(setCanvasForm(formType));
	};

	return (
		<div>
			<p>Forms</p>
			<ul>
				<li
					onClick={() =>
						handleGetLocalForm(SAMPLE_FORM_TYPES.ElectronicConsent)
					}
				>
					Electronic Consent
				</li>
			</ul>
		</div>
	);
};

export default SubNav;
