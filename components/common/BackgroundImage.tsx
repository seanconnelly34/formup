interface ILayout {
	children: React.ReactNode;
	src: string;
}
const BackgroundImage = ({ children, src }: ILayout) => (
	<main>
		<div
			className={'sm:bg-cover'}
			style={{
				backgroundImage: `url(${src})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'right center',
				position: 'absolute',
				width: '100%',
				height: '100%',
				overflow: 'visible',
				filter: 'blur(30px)',
			}}
		></div>
		{children}
	</main>
);
export default BackgroundImage;
