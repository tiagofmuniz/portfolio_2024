'use client';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useSectionContext } from 'contexts_and_providers/useSectionContext';
import { menu_list } from '../../../app/api/(data)/menu_list';

export default function Menu() {
  const { activeSection, setSection } = useSectionContext();

  const router = useRouter();
  const pathName = usePathname();

  function handleActive(id: string) {

    setSection(activeSection);
    if (pathName !== '/') {
      router.push(`/#${id}`);
    }
  }

  return (
    <nav className={styles.menu_container}>
      <ul>
        {menu_list.map((item) => (
          <li key={item.id} onClick={() => handleActive(item.id)} className={`${activeSection === item.id ? styles.border_animate : ''}`}>
            <Link href={`#${item.id}`} className='link'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
