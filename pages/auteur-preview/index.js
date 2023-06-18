import Head from 'next/head';
import style from './style';

export default () => {
	return (
		<>
			<Head>
				<title>Auteur Preview</title>
			</Head>
			<article className={style.contentWrapper}>
				<h1>Auteur</h1>
				<a className={style.cta} href="/auteur">
					www.suhanwijaya.com/auteur
				</a>
				<p>
					Auteur is a full-stack web application inspired by Tumblr. It utilizes Node.js on the backend, a
					MongoDB database, and React.js with a Redux architectural framework on the frontend.
				</p>

				<h2>Features and Implementation</h2>

				<h3>Single Page</h3>
				<p>
					Auteur is a single page app that allows for quick navigation between its various components. As data
					is fetched from NodeJS, components are only updated when necessary.
				</p>

				<h3>Carousel</h3>
				<p>
					Integrated React stateful components, CSS keyframe animations, and DOM events to create a carousel
					that responds to arrow keys, strokes on the touchpad, and mouse clicks.
				</p>
				<figure>
					<img src="/images/auteur-carousel.gif" />
				</figure>

				<h3>Posts</h3>
				<p>
					To keep code DRY, leveraged Higher Order Components and component composition to render different
					types of posts and new/edit forms.
				</p>
				<figure>
					<img src="/images/auteur-post_types.gif" />
				</figure>
				<p>Incorporated AWS SDK to upload images to AWS S3 and persist image data to MongoDB</p>
				<figure>
					<img src="/images/auteur-posts.gif" />
				</figure>

				<h3>Notes (Likes and Comments)</h3>
				<p>
					On the backend, designed a polymorphic and extensible MongoDB schema for different note types such
					as likes and comments.
				</p>
				<figure>
					<img src="/images/auteur-notes.gif" />
				</figure>

				<h3>Following Blogs</h3>
				<p>Integrated React and CSS3 keyframes to animate page elements and improve user experience.</p>
				<figure>
					<img src="/images/auteur-following-blogs.gif" />
				</figure>

				<h3>Tags and Search</h3>
				<p>
					Built a search feature with autocomplete that suggests hashtags ranked by popularity. Integrated
					React and CSS3 Flexbox to accomplish a ‘masonry’ layout for search results.
				</p>
				<figure>
					<img src="/images/auteur-search.gif" />
				</figure>

				<h3>Notifications</h3>
				<p>
					Leveraged WebSockets to implement the notifications feature. Likes and comments will create
					real-time in-app notifications for the relevant user.
				</p>
				<figure>
					<img src="/images/auteur-notifications.gif" />
				</figure>

				<h3>Chat</h3>
				<p>Leveraged WebSockets to implement the chat feature with an online indicator.</p>
				<figure className={style.figureFlex}>
					<img src="/images/auteur-chat.gif" />
					<img src="/images/auteur-online_indicator.gif" />
				</figure>

				<h3>Responsive Layout</h3>
				<p>Enabled selective rendering and responsive layout for mobile devices via CSS media query.</p>
				<figure>
					<img src="/images/auteur-responsive.gif" />
				</figure>
			</article>
		</>
	);
};
