import { useState } from 'react';
import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';
import { isTouchDevice } from 'utils';

const Projects = () => (
	<section id={'projects-section'} className={cn(style.projects, utilStyle.homeSection)}>
		<h2 className={style.title}>projects</h2>
		<div className={style.masonry}>
			<div className={style.column}>
				<ProjectThumbnail
					href={'/tmnt'}
					imageSrc={'/images/tmnt.png'}
					stack={['react.png', 'redux.png', 'html5.png', 'css3.png']}
				/>
				<ProjectThumbnail
					href={'/auteur'}
					imageSrc={'/images/auteur.png'}
					stack={[
						'react.png',
						'redux.png',
						'nodejs.png',
						'express.png',
						'mongoose.jpg',
						'mongodb.png',
						'passport.png',
						'socketio.png',
					]}
				/>
			</div>
			<div className={style.column}>
				<ProjectThumbnail
					href={'/mapmycruise'}
					imageSrc={'/images/mapmycruise.png'}
					stack={[
						'react.png',
						'redux.png',
						'ruby.png',
						'rails.png',
						'active-record.png',
						'postgresql.png',
						'googlemaps.png',
						'pusher.png',
					]}
				/>
			</div>
		</div>
	</section>
);

const ProjectThumbnail = ({ href, imageSrc, description, stack }) => {
	const [showOverlay, setShowOverlay] = useState(false);

	const handleMouseEvent = (e) => {
		if (isTouchDevice()) {
			return;
		}

		if (showOverlay && e?.type === 'mouseleave') {
			setShowOverlay(false);
		} else if (!showOverlay && e?.type === 'mouseenter') {
			setShowOverlay(true);
		}
	};

	return (
		<a
			className={cn(style.cell, showOverlay ? style.show : null)}
			href={href}
			target="_blank"
			onMouseEnter={handleMouseEvent}
			onMouseLeave={handleMouseEvent}>
			<span className={style.overlay}></span>
			<span className={style.overlayContent}>
				<span className={style.iconWrapper}>
					{stack?.length > 0 && stack.map((filename) => <img key={filename} className={style.icon} src={`/tech-icons/${filename}`} />)}
				</span>
			</span>
			<img src={imageSrc} />
		</a>
	);
};

export default Projects;
