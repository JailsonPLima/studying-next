'use client';

import styles from '@/app/pages.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{
		label: 'home',
		link: '/',
	},
	{
		label: 'posts',
		link: '/posts',
	},
	{
		label: 'crud',
		link: '/crud',
	},
];

const Header = () => {
	const pathname = usePathname();

	return (
		<header>
			<nav className={styles.nav}>
				{navLinks.map(({ label, link }, index) => (
					<Link
						className={`${styles.nav__link} ${
							pathname === link ? styles.nav__link__current : ''
						}`}
						href={link}
						key={index}
					>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Header;
