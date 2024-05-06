import { ThreeDots } from 'react-loader-spinner';

declare type Style = {
	[key: string]: string;
};

const Loader = ({ wrapperStyle }: { wrapperStyle?: Style }) => (
	<ThreeDots
		height='30'
		width='50'
		radius='9'
		color='white'
		ariaLabel='three-dots-loading'
		wrapperStyle={wrapperStyle}
		visible={true}
		wrapperClass='flex items-center self-center justify-center'
	/>
);

export default Loader;
