import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

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
