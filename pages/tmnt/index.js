import Head from 'next/head';

const Tmnt = () => {
	const metaTitle = 'TMNT React by Suhan Wijaya';
	const metaDescription = 'Classic "beat \'em up" 2D scroller built with React, Redux and CSS, based on the SNES TMNT 4: Turtles in Time.';
	const metaImage = 'https://www.suhanwijaya.com/images/tmnt.png';
	const metaUrl = 'https://www.suhanwijaya.com/tmnt';
	
	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{metaTitle}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="title" content={metaTitle} />
			<meta name="description" content={metaDescription} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={metaUrl} />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:image" content={metaImage} />

			{/* Twitter */}
			<meta name="twitter:title" content={metaTitle} />
			<meta name="twitter:description" content={metaDescription} />
			<meta name="twitter:image" content={metaImage} />
			<meta name="twitter:card" content="summary_large_image" />

			<script>
				window.location.replace('https://www.suhanwijaya.com/tmnt_react/');
			</script>
		</Head>
	);
};

export default Tmnt;
