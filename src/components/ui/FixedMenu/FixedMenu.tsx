import styles from './FixedMenu.module.scss';
import { useSectionContext } from 'contexts_and_providers/useSectionContext';
import Link from 'next/link';
import { useEffect } from 'react';
import { menu_list } from 'app/api/(data)/menu_list';
import Tippy from 'tippy.js';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';

export default function FixedMenu() {
  const { activeSection } = useSectionContext();
  const response = menu_list;

  useEffect(() => {
    response?.forEach((item) => {
      Tippy(`#${item.label}`, {
        content: item.label,
        placement: 'left',
      });
      console.log(activeSection);
      if (activeSection === 'home') window.scrollTo(0, 0);
    });
  }, [activeSection]);

  return (
    <div className={styles.fixedMenu}>
      {response?.map((item) => (
        <Link key={item.label} id={item.label} href={`#${item.id}`} className={`${activeSection == item.id ? styles.actived : ''}`}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
