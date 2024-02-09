import WaterMark from 'components/ui/WaterMark/WaterMark';
import styles from './Projects.module.scss';
import CardProject from './CardProject/CardProject';
import { repositories } from '../../../app/api/(data)/repositories';
import SectionObserver from 'contexts_and_providers/SectionObserver';

export default function Projects() {
  return (
    <div className={styles.projects_container}>
      <SectionObserver sectionId='projects'>
        <WaterMark label='Projetos' />
      </SectionObserver>

      <div className={styles.content}>
        <h1>Últimos projetos...</h1>
        <p>Do aprendizado à aplicação:</p>
        <p> projetos que contam minha história!</p>
        <div className={styles.cardsContainer}>
          {repositories?.map((repo) => {
            return <CardProject key={repo.name} repo={repo} />;
          })}
        </div>
      </div>
    </div>
  );
}
