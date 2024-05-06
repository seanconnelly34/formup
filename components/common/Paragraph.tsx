import { ReactNode } from 'react';

enum Styles {
	error = 'text-red',
	warning = 'text-yellow',
	base = 'text-gray',
	white = 'text-white',
	success = 'text-green-100',
	purple = 'text-purple-100',
}

enum Sizes {
	sm = 'text-sm',
	md = 'text-md',
	lg = 'text-lg',
}

enum Weights {
	light = 'font-ralewayLight',
	base = 'font-ralewayMed',
	bold = 'font-ralewayBold',
}

interface IParagraph {
	type?: 'error' | 'warning' | 'base' | 'white' | 'success' | 'purple';
	size?: 'sm' | 'md' | 'lg';
	weight?: 'base' | 'light' | 'bold';
	children: ReactNode | string;
	className?: string;
}

const Paragraph = ({
	type = 'error',
	size = 'sm',
	children,
	className,
	weight = 'base',
}: IParagraph) => (
	<p
		className={[Styles[type], Sizes[size], className, Weights[weight]].join(
			' '
		)}
	>
		{children}
	</p>
);

export default Paragraph;
