import Link from 'next/link'
import style from './style';

const Menu = () => {
	return (
		<nav className={style.menu}>
			<h2 className={style.name}>suhan <br />wijaya</h2>
			<ul className={style.menuItems}>
				<li><Link href='/#intro'><a>INTRO</a></Link></li>
				<li><Link href='/#about'><a>ABOUT</a></Link></li>
				<li><Link href='/#projects'><a>PROJECTS</a></Link></li>
				<li><Link href='/#blog'><a>BLOG</a></Link></li>
				<li><Link href='/#technologies'><a>TECHNOLOGIES</a></Link></li>
				<li><Link href='/#contact'><a>CONTACT</a></Link></li>
			</ul>
		</nav>
	);
};

export default Menu;
