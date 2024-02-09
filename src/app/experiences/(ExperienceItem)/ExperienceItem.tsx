'use client';
import React, { useState } from 'react';
import styles from './experience_item.module.scss';

const ResponsibilitiesList = ({ responsibilities }) => (
  <div>
    <ul>
      {responsibilities?.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

const ExperienceItem = ({ experienceData }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const responsibilitiesLength = experienceData?.responsibilities ? experienceData?.responsibilities.length : 0;
  const halfResponsibilities = responsibilitiesLength / 2;
  const firstHalfResponsibilities = experienceData?.responsibilities?.slice(0, halfResponsibilities);
  const secondHalfResponsibilities = experienceData?.responsibilities?.slice(halfResponsibilities);

  return (
    <div id={experienceData?.company} className={styles.experienceContainer}>
      <div className={styles.circleExtern}>
        <div className={styles.circleIntern}></div>
      </div>

      <div className={styles.main} onClick={toggleOpen}>
        <div className={styles.box}>
          <h1>{experienceData?.company}</h1>
          <h2>{`${experienceData?.position} (${experienceData?.period})`}</h2>
          <span>
            {experienceData?.initialRoleDescription}
            {!open && <span className={styles.emphasis}>continue...</span>}
          </span>
        </div>

        <div className={`${styles.description} ${open ? styles.visible : styles.hidden}`}>
          {experienceData?.additionalExperienceText.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
          <h2>Responsabilidades</h2>
          <div className={styles.responsibilities}>
            {firstHalfResponsibilities && <ResponsibilitiesList responsibilities={firstHalfResponsibilities} />}
            {secondHalfResponsibilities && <ResponsibilitiesList responsibilities={secondHalfResponsibilities} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
