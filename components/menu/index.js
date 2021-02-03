import { useState, useEffect } from 'react';
import Link from 'next/link'
import cn from 'classnames';
import style from './style';

const Menu = () => {
	const [ showMenu, setShowMenu ] = useState(false);

	useEffect(() => {
		if (typeof document !== 'undefined' && document.body?.style) {
			document.body.style.overflow = showMenu ? 'hidden' : ''; // prevent scrolling when menu is expanded on mobile
		} 
	}, [showMenu]); 

	const toggleMenu = e => setShowMenu(prevShowMenu => !prevShowMenu);

	const hideMenu = e => setShowMenu(false);
	
	return (<>
		<nav className={cn(style.menu, showMenu ? style.showMenu : null)}>
			<h2 className={style.name}>suhan <br />wijaya</h2>
			<ul className={style.menuItems}>
				<li><Link href='/#intro'><a onClick={hideMenu}>INTRO</a></Link></li>
				<li><Link href='/#about'><a onClick={hideMenu}>ABOUT</a></Link></li>
				<li><Link href='/#blog'><a onClick={hideMenu}>BLOG</a></Link></li>
				<li><Link href='/#projects'><a onClick={hideMenu}>PROJECTS</a></Link></li>
				<li><Link href='/#technologies'><a onClick={hideMenu}>TECHNOLOGIES</a></Link></li>
				<li><Link href='/#contact'><a onClick={hideMenu}>CONTACT</a></Link></li>
			</ul>
		</nav>
		<button className={style.hamburger} onClick={toggleMenu}>
			<img src={'/images/hamburger.png'} />
		</button>
	</>);
};

export default Menu;
