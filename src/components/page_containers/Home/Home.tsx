import React from 'react';
import styles from './Home.module.scss';
import { channels } from '../../../app/api/(data)/channels';
import BtnSocialLink from 'components/ui/BtnSocialLink/BtnSocialLink';
import FixedMenu from 'components/ui/FixedMenu/FixedMenu';
import SectionObserver from 'contexts_and_providers/SectionObserver';

export default function Home() {
  const channelsList = channels.filter((item) => ['linkedin', 'currículo', 'github'].includes(item.label));
  return (
    <div className={styles.layoutContainer} id='home'>
      <FixedMenu />
      <div className={styles.welcomeText}>
        <SectionObserver sectionId='home'>
          <h1>
            Olá <br />
            Eu Sou O <span className={styles.name}>Tiago</span> <br />
            <span className={styles.jobTitle}>Desenvolvedor Web</span>
          </h1>
        </SectionObserver>
      </div>
      <div className={styles.text}>
        <p className={styles.outline}>
          meu negócio é criar&nbsp;
          <span className={styles.experience}>
            experiências digitais <br />interativas e funcionais
          </span>
        </p>
      </div>
      <div className={styles.socialContainer}>
        {channelsList?.map((channel) => (
          <BtnSocialLink key={channel.label} icon={channel.icon} label={channel.label} url={channel.value} />
        ))}
      </div>
    </div>
  );
}
