import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Projects = (props) => {
	return (
		<section id={'projects-section'} className={cn(style.projects, utilStyle.homeSection)}>
			<h2 className={style.title}>projects</h2>
			<div className={style.masonry}>
				<div className={style.column}>
					<span className={style.cell}><img src='/images/tmnt.png' /></span>
					<span className={style.cell}><img src='/images/auteur.png' /></span>
				</div>
				<div className={style.column}>
					<span className={style.cell}><img src='/images/mapmycruise.png' /></span>
				</div>
			</div>
		</section>
	);
};

export default Projects;
