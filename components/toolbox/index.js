import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Toolbox = (props) => {
	return (
		<section id={'toolbox-section'} className={cn(style.toolbox, utilStyle.homeSection)}>
			<h2 className={style.title}>toolbox</h2>
			<div className={style.icons}>
				<TechIcon imageSrc={'/tech-icons/javascript.jpeg'} imageCaption={`JavaScript`} />
				<TechIcon imageSrc={'/tech-icons/html5.png'} imageCaption={`HTML5`} />
				<TechIcon imageSrc={'/tech-icons/css3.png'} imageCaption={`CSS3`} />
				<TechIcon imageSrc={'/tech-icons/react.png'} imageCaption={`React`} />
				<TechIcon imageSrc={'/tech-icons/redux.png'} imageCaption={`Redux`} />
				<TechIcon imageSrc={'/tech-icons/react-router.png'} imageCaption={`React Router`} />
				<TechIcon imageSrc={'/tech-icons/babel.png'} imageCaption={`Babel`} />
				<TechIcon imageSrc={'/tech-icons/less.png'} imageCaption={`Less`} />
				<TechIcon imageSrc={'/tech-icons/storybook.png'} imageCaption={`Storybook`} />
				<TechIcon imageSrc={'/tech-icons/nodejs.png'} imageCaption={`Node.js`} />
				<TechIcon imageSrc={'/tech-icons/hapi.png'} imageCaption={`Hapi.js`} />
				<TechIcon imageSrc={'/tech-icons/express.png'} imageCaption={`Express.js`} />
				<TechIcon imageSrc={'/tech-icons/next-js.svg'} imageCaption={`Next.js`} />
				<TechIcon imageSrc={'/tech-icons/graphql.png'} imageCaption={`GraphQL`} />
				<TechIcon imageSrc={'/tech-icons/jest.png'} imageCaption={`Jest`} />
				<TechIcon imageSrc={'/tech-icons/enzyme.png'} imageCaption={`Enzyme`} />
				<TechIcon imageSrc={'/tech-icons/npm.png'} imageCaption={`npm`} />
				<TechIcon imageSrc={'/tech-icons/thumbor.jpg'} imageCaption={`Thumbor`} />
				<TechIcon imageSrc={'/tech-icons/passport.png'} imageCaption={`Passport.js`} />
				<TechIcon imageSrc={'/tech-icons/socketio.png'} imageCaption={`Socket.io`} />
				<TechIcon imageSrc={'/tech-icons/mongodb.png'} imageCaption={`MongoDB`} />
				<TechIcon imageSrc={'/tech-icons/mongoose.jpg'} imageCaption={`Mongoose`} />
				<TechIcon imageSrc={'/tech-icons/postgresql.png'} imageCaption={`PostgreSQL`} />
				<TechIcon imageSrc={'/tech-icons/active-record.png'} imageCaption={`activerecord`} />
				<TechIcon imageSrc={'/tech-icons/redis.png'} imageCaption={`Redis`} />
				<TechIcon imageSrc={'/tech-icons/webpack.png'} imageCaption={`webpack`} />
				<TechIcon imageSrc={'/tech-icons/grunt.png'} imageCaption={`Grunt`} />
				<TechIcon imageSrc={'/tech-icons/git.png'} imageCaption={`Git`} />
				<TechIcon imageSrc={'/tech-icons/tower.png'} imageCaption={`Tower`} />
				<TechIcon imageSrc={'/tech-icons/github.png'} imageCaption={`GitHub`} />
				<TechIcon imageSrc={'/tech-icons/docker.png'} imageCaption={`Docker`} />
				<TechIcon imageSrc={'/tech-icons/jenkins.png'} imageCaption={`Jenkins`} />
				<TechIcon imageSrc={'/tech-icons/gcp.jpg'} imageCaption={`GCP`} />
				<TechIcon imageSrc={'/tech-icons/amazon-s3.png'} imageCaption={`AWS S3`} />
				<TechIcon imageSrc={'/tech-icons/heroku.png'} imageCaption={`Heroku`} />
				<TechIcon imageSrc={'/tech-icons/datadog.jpg'} imageCaption={`Datadog`} />
				<TechIcon imageSrc={'/tech-icons/graylog.png'} imageCaption={`Graylog`} />
				<TechIcon imageSrc={'/tech-icons/chrome.png'} imageCaption={`Chrome`} />
				<TechIcon imageSrc={'/tech-icons/firefox.png'} imageCaption={`Firefox`} />
				<TechIcon imageSrc={'/tech-icons/safari.jpg'} imageCaption={`Safari`} />
				<TechIcon imageSrc={'/tech-icons/edge.jpeg'} imageCaption={`Edge`} />
				<TechIcon imageSrc={'/tech-icons/ie.png'} imageCaption={`IE11`} />
				<TechIcon imageSrc={'/tech-icons/browserstack.png'} imageCaption={`BrowserStack`} />
				<TechIcon imageSrc={'/tech-icons/responsively.png'} imageCaption={`Responsively`} />
				<TechIcon imageSrc={'/tech-icons/vsc.png'} imageCaption={`Visual Studio Code`} />
				<TechIcon imageSrc={'/tech-icons/zeplin.png'} imageCaption={`Zeplin`} />
				<TechIcon imageSrc={'/tech-icons/postman.png'} imageCaption={`Postman`} />
				<TechIcon imageSrc={'/tech-icons/slack.jpg'} imageCaption={`Slack`} />
				<TechIcon imageSrc={'/tech-icons/jira.jpg'} imageCaption={`JIRA`} />
				<TechIcon imageSrc={'/tech-icons/notion.jpg'} imageCaption={`Notion`} />
				<TechIcon imageSrc={'/tech-icons/google-analytics.jpg'} imageCaption={`Google Analytics`} />
				<TechIcon imageSrc={'/tech-icons/pusher.png'} imageCaption={`Pusher`} />
				<TechIcon imageSrc={'/tech-icons/ruby.png'} imageCaption={`Ruby`} />
				<TechIcon imageSrc={'/tech-icons/rails.png'} imageCaption={`Rails`} />
			</div>
		</section>
	);
};

const TechIcon = ({ imageSrc, imageCaption }) => (
	<figure className={style.icon}>
		<img src={imageSrc} alt={`Icon for ${imageCaption}`} />
		<figcaption>{imageCaption}</figcaption>
	</figure>
);

export default Toolbox;
