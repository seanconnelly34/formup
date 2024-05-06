import SignUpHeader from '@/components/signup/SignUpHeader';

interface IBlackPanel {
	children: React.ReactNode;
}

const LeftBlackPanel = ({ children }: IBlackPanel) => {
	return (
		<div
			className={`top-[100px] absolute left-0 w-[calc(100%-32px)] mx-4 sm:mx-0 sm:top-0 flex sm:justify-center sm:overflow-scroll sm:min-w-[400px] sm:max-w-[550px] sm:h-[100%] sm:bottom-0 sm:right-0 bg-[#050708] bg-opacity-70 backdrop-blur-[25px] p-4 sm:px-[65px] sm:py-[30px] pt-10 z-[2]`}
		>
			<div className='sm:max-w-[500px] w-full text-gray'>
				<div className='sm:block hidden'>
					<SignUpHeader />
				</div>
				{children}
			</div>
		</div>
	);
};
export default LeftBlackPanel;
