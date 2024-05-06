import ApplicationReview from '@/components/applicationReview/index.';
import BackgroundImage from '@/components/common/BackgroundImage';
import useRandomImage from '@/hooks/useRandomImage';

const ApplicationReviewContainer = () => {
	const { selectedImage } = useRandomImage();

	return (
		<div>
			<BackgroundImage src={selectedImage.img}>
				<ApplicationReview />
			</BackgroundImage>
			<footer></footer>
		</div>
	);
};

export default ApplicationReviewContainer;
