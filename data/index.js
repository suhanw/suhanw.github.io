import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'data/posts');

export const getPinnedPosts = () => {
	let pinnedPosts = [];

	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	fileNames.forEach((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		if (matterResult?.data?.pin_order > 0) {
			pinnedPosts.push({
				id,
				...matterResult.data,
			});
		}
	});

	// Sort posts by pin order
	return pinnedPosts.sort((a, b) => {
		if (a.pin_order > b.pin_order) {
			return 1;
		} else {
			return -1;
		}
	});
};

export const getAllPosts = () => {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPosts = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		return {
			id,
			...matterResult.data,
		}
	});

	// Sort posts by date
	return allPosts.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export const getAllPostIds = () => {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
};

export const getPostData = async (id) => {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(remarkPrism, {
			transformInlineCode: true,
		}) // add code block highlights
		.use(remarkHtml)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	// Combine the data with the id
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
