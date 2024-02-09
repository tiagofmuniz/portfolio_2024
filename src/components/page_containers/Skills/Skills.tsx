import React, { useEffect } from 'react';
import styles from './Skills.module.scss';
import WaterMark from 'components/ui/WaterMark/WaterMark';
import Cube3d from './Cube3d/Cube3d';
import { skills } from 'app/api/(data)/skills';
import SectionObserver from 'contexts_and_providers/SectionObserver';
import Tippy from 'tippy.js';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';

export default function Skills() {
  useEffect(() => {
    skills?.forEach((item) => {
      Tippy(`#${item.label}`, {
        content: item.tooltip,
        placement: 'bottom',
        offset: [30, 30],
      });
    });
  }, [skills]);

  return (
    <div className={styles.skills_container}>
      <SectionObserver sectionId='skills'>
        <WaterMark label='Tecnologias' />
      </SectionObserver>

      <div className={styles.skillItem}>
        {skills?.map((item) => (
          <div key={item.label} id={item.label} className={styles.cubeContainer}>
            <Cube3d label={item.label} topIcon={item.icon} innerIcon={item.iconInternal} size='200px' />
          </div>
        ))}
      </div>
    </div>
  );
}
