import Head from 'next/head';

const MapMyCruise = () => {
	const metaTitle = 'mapmycruise by Suhan Wijaya';
	const metaDescription = 'MapMyCruise is a full-stack web application inspired by MapMyRun. Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.';
	const metaImage = 'https://www.suhanwijaya.com/images/mapmycruise.png';
	const metaUrl = 'https://www.suhanwijaya.com/mapmycruise';
	
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
				window.location.replace('https://mapmycruise.herokuapp.com');
			</script>
		</Head>
	);
};

export default MapMyCruise;
