import Head from 'next/head';
import { getAllPostIds, getPostData } from 'data';
import Date from 'components/date'

export const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

const Post = ({ postData }) => {
	// console.log({ postData })
	return (
		<>
			<Head>
				<title>{postData?.title}</title>
			</Head>
			<article>
				<h1>{postData?.title}</h1>
				<Date dateString={postData.date} />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</>
	);
};

export default Post;
