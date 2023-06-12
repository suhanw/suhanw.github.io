import Document, { Html, Head, Main, NextScript } from 'next/document';

// https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
					{process.env.NODE_ENV !== 'development' ?? (<>
						<script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0TSM98BL"></script>
						<script dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments)}
								gtag('js', new Date());

								gtag('config', 'G-CZ0TSM98BL');
						`}} />
					</>)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
