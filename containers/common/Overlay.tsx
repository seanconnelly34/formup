interface IOverlay {
	children: React.ReactNode;
}
const Overlay = ({ children }: IOverlay) => (
	<div className='flex absolute w-[100%] h-[100%] bottom-0 right-0 bg-[#050708] bg-opacity-30 backdrop-blur-[25px] overflow-scroll'>
		{children}
	</div>
);
export default Overlay;
