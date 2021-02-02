import cn from 'classnames';
import style from './style';
import utilStyle from 'styles/utils';

const Projects = (props) => {
	return (
		<section id={'projects-section'} className={cn(style.projects, utilStyle.homeSection)}>
			<h2 className={style.title}>projects</h2>
			<div className={style.masonry}>
				<div className={style.column}>
					<a className={style.cell} href='https://www.suhanwijaya.com/tmnt_react' target='_blank'><img src='/images/tmnt.png' /></a>
					<a className={style.cell} href='https://auteur-nodejs.herokuapp.com' target='_blank'><img src='/images/auteur.png' /></a>
				</div>
				<div className={style.column}>
					<a className={style.cell} href='https://mapmycruise.herokuapp.com' target='_blank'><img src='/images/mapmycruise.png' /></a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
