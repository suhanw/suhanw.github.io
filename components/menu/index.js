import style from './style';

const Menu = () => {
	return (
		<nav className={style.menu}>
			<h2 className={style.name}>suhan wijaya</h2>
			<ul className={style.menuItems}>
				<li>INTRO</li>
				<li>ABOUT ME</li>
				<li>MY PROJECTS</li>
				<li>BLOG</li>
				<li>CONTACT</li>
			</ul>
		</nav>
	);
};

export default Menu;
