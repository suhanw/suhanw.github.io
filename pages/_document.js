import Document, { Html, Head, Main, NextScript } from 'next/document';

// https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		let gtagScript = (
			<>
				{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0TSM98BL"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments)}
									gtag('js', new Date());
	
									gtag('config', 'G-CZ0TSM98BL');
							`,
					}}
				/>
			</>
		);

		if (process.env.NODE_ENV === 'development') {
			gtagScript = null;
		}

		return (
			<Html>
				<Head>{gtagScript}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
