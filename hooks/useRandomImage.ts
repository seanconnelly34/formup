import { useMemo } from 'react';

const HeroImageArray = [
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Antonio-Piedade-Anubis-Army.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Antonio-Piedade-Anubis-The-Avatar-God-2.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Antonio-Piedade-Anubis-The-Avatar-God-3.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/ntonio-Piedade-Anubis-The-Avatar-God-4.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Antonio-Piedade-Anubis-The-Avatar-God-5.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Antonio-Piedade-Anubis-The-Avatar-God-6.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Diego-Quiroga-The-Crypto-Pharaohs-World-1.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Diego-Quiroga-The-Crypto-Pharaohs-World-2.jpg',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Diego-Quiroga-The-Crypto-Pharaohs-World-3.jpg',
	},

	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Crab-Claw-Adapt-Submerged-3.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Free-Diver-Explore-Submerged-3.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Free-Diver-Explore-Submerged-3.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Goldfish-Mermaid-Discover-Submerged-4.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Humpback-Mom-Embrace-Submerged-1.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Jellyfish-Accept-Submerged.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Worrior-Resist-Submerged-2.png',
	},
	{
		img: 'https://s3.ca-central-1.amazonaws.com/storage-app.subscryb.xyz/HeroImages/Michael-Binkley-Worrior-Resist-Submerged-3.png',
	},
];

const useRandomImage = () => {
	const randomNumber = () =>
		Math.floor(Math.random() * HeroImageArray.length);

	const memoizedNumber = useMemo(() => randomNumber(), []);
	const selectedImage = HeroImageArray[memoizedNumber];

	return { selectedImage };
};

export default useRandomImage;
