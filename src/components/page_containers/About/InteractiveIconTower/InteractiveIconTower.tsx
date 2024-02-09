import Link from 'next/link';
import styles from './InteractiveIconTower.module.scss';

export default function InteractiveIconTower({ icon, url }) {
  return (
    <div className={styles.layer_tower_container}>
      <ul>
        {
          <li>
            <Link className={styles.link} href={url} target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className={styles.img}>{icon}</span>
            </Link>
          </li>
        }
      </ul>
    </div>
  );
}
