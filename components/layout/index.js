import cn from 'classnames';
import Menu from 'components/menu';
import style from './style';

const Layout = ({ children, topMenu }) => {
	return (
		<div className={cn({
			[style.layout]: true,
			[style.hasTopMenu]: topMenu,
		})}>
			<Menu topMenu={topMenu} />
			{children}
		</div>
	);
}

export default Layout;
