import 'styles/global';
import smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
	smoothscroll.polyfill(); // enable window.scrollTo(optionsObject) in Safari and IE11
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
