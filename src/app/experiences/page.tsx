import ExperienceItem from './(ExperienceItem)/ExperienceItem';
import { experiences } from '../api/(data)/experiences';
import styles from './section_experiences.module.scss';

export default function SectionExperiences() {
  return (
    <section className={styles.sectionExperiencesContainer}>
      <h1>Experiências profissionais</h1>

      {experiences?.map((experience, index) => (
        <ExperienceItem key={index} experienceData={experience} />
      ))}
    </section>
  );
}
