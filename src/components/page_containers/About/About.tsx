'use client';
import React, { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import LineIconKeyValue from 'components/ui/LineIconKeyValue/LineIconKeyValue';
import { experiences } from '../../../app/api/(data)/experiences';
import { profile_infos } from '../../../app/api/(data)/profile_infos';
import { channels } from '../../../app/api/(data)/channels';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import InteractiveIconTower from './InteractiveIconTower/InteractiveIconTower';
import SectionObserver from 'contexts_and_providers/SectionObserver';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import WaterMark from 'components/ui/WaterMark/WaterMark';
import 'tippy.js/dist/tippy.css';
import Tippy from 'tippy.js';

export default function AboutPage() {
  useEffect(() => {
    channels.forEach((item) => {
      Tippy(`#${item.label}`, {
        content: item.label,
        offset: [0, 50],
      });
    });
  }, [channels]);

  const channelList = channels.filter((item) => {
    if (item.label !== 'instagram' && item.label !== 'currículo') return item;
  });

  return (
    <div className={styles.aboutPageContainer}>
      <SectionObserver sectionId='about'>
        <WaterMark label='Sobre' />
      </SectionObserver>

      <div className={styles.hero_container}>
        <Image src='/images/zyro_image.png' className={styles.profile_img} width={300} height={300} alt='' />

        <div className={styles.hero_text}>
          <p>
            <Balancer ratio={0.5} preferNative={false}>
              Formado em Sistemas de informação, possuo experiência em desenvolvimento web com ênfase com no ecossistema JavaScript,
              abrangendo tecnologias como React, Next e Node.
            </Balancer>
          </p>
          <p>
            Apaixonado por transformar ideias em realidade por meio da programação. Estou ansioso para mergulhar ainda mais nesse universo
            fascinante e contribuir para a construção de soluções inovadoras.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.experiencesContainer}>
          {experiences?.map((experience, index) => (
            <ExperienceItem
              key={experience.tag}
              company={experience.company}
              position={experience.position}
              pathUrl={`#${experience.company}`}
            />
          ))}
        </div>

        <div className={styles.personalInfoContainer}>
          <div className={styles.profileInfos}>
            {profile_infos?.map((item) => (
              <LineIconKeyValue key={item.label} label='' icon={item.icon} value={item.value} url='' />
            ))}
          </div>

          <div className={styles.socialItems}>
            {channelList.map((item) => (
              <InteractiveIconTower id={item.label} key={item.label} icon={item.icon} url={item.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
