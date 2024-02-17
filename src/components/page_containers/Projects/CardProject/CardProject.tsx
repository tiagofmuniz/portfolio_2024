import styles from './CardProject.module.scss';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export default function CardProject({ repo }) {
  const { name, html_url, description, languages_list } = repo;

  const recortDescription = description.slice(0, 225);
  const isEllipsis = recortDescription.endsWith('.');
  const resumeDescription = `${recortDescription}${isEllipsis ? '' : '...'}`;

  return (
    <div className={`${styles.cardProjectContainer} ${Boolean(repo.fake_item) ? styles.fakeItem : ''}`}>
      <div className={styles.header}>
        {isEllipsis}

        <FaRegFolderOpen className={styles.folder} />

        <ul className={styles.hashtagContainer}>
          {languages_list?.map((language: string, index: number) => (
            <li key={index}>{`#${language}`}</li>
          ))}
        </ul>

        <Link className={styles.link} href={html_url}>
          <FaGithubSquare className={styles.github} />
        </Link>
      </div>

      <div className={styles.content}>
        <h1>{name}</h1>

        <Link className={styles.link} href={`/projects/${name}`}>
          <p>
            <Balancer ratio={.5} preferNative={false}>
              {resumeDescription}
            </Balancer>
          </p>
        </Link>
      </div>
    </div>
  );
}
