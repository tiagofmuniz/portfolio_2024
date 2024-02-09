import { useEffect, useState } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Tippy from 'tippy.js';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/dist/tippy.css';

import styles from './Contacts.module.scss';
import Balancer from 'react-wrap-balancer';
import WaterMark from 'components/ui/WaterMark/WaterMark';
import InteractiveIconTower from '../About/InteractiveIconTower/InteractiveIconTower';
import SectionObserver from 'contexts_and_providers/SectionObserver';
import { channels } from 'app/api/(data)/channels';
import { PiPlanetThin } from 'react-icons/pi';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Por favor, preencha seu nome.'),
  email: z.string().email('Formato de e-mail inválido'),
  subject: z.string(),
  message: z.string().min(1, 'Diga-me, como posso ajudá-la(o)'),
});
type contactFormData = z.infer<typeof contactFormSchema>;

export default function Contacts() {
  const [afterPosition, setAfterPosition] = useState<string | number>('-100%');
  const [colorTextBtn, setcolorTextBtn] = useState<string>('');

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    mode: 'all',
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<contactFormData> = async (data) => {
    console.log(data);
    const { name, email, subject, message } = data;
    const params = { name, email, subject, message };
    const response = await axios.post('/api', params);
    return response;
  };

  const contactList = channels.filter((item) => item.label === 'whatsapp' || item.label === 'linkedin' || item.label === 'github');
  useEffect(() => {
    (() =>
      watch((data) => {
        function countPropertiesWithValues(obj) {
          return Object.values(obj).filter((value) => value !== null && value !== undefined && value !== '').length;
        }

        var numberOfPropertiesWithValues = countPropertiesWithValues(data);
        const position = -100 + +numberOfPropertiesWithValues * 25;
        const positionString = `${position}%`;
        setAfterPosition(positionString);

        setcolorTextBtn(numberOfPropertiesWithValues > 2 ? '#000' : '#FFF');
        contactList?.forEach((item) => {
          Tippy(`#${item.label}`, {
            content: item.tooltip,
            placement: 'bottom',
            offset: [30, 30],
          });
        });
      }))();
  }, [watch]);

  interface InlineStyle {
    [key: string]: string | number;
  }

  const inlineStyles: InlineStyle = {
    '--buttonAfterPosition': afterPosition,
    '--btnSubmitContactTextColor': colorTextBtn,
  };

  return (
    <div className={styles.mainContainer}>
      <SectionObserver sectionId='contact'>
        <WaterMark label='Contato' />
      </SectionObserver>

      <div className={styles.contactsContainer} style={inlineStyles}>
        <div className={styles.content}>
          <div className={`${styles.col} ${styles.leftCol}`}>
            <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
              <p>NOME</p>
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              <input {...register('name')} type='text'></input>

              <p>E-MAIL</p>
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              <input {...register('email')} type='email'></input>

              <p>ASSUNTO</p>
              {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
              <input {...register('subject')} type='text'></input>

              {errors.message && <span className={styles.error}>{errors.message.message}</span>}
              <textarea {...register('message')} placeholder='Mensagem'></textarea>

              <div className={styles.buttonContainer}>
                <button type='submit' style={{ color: colorTextBtn }}>
                  ENVIAR
                </button>
              </div>
            </form>
            <div className={styles.footerImage}>
              <img src='/images/temp/image5.png' alt=''></img>
            </div>
          </div>
          <div className={`${styles.col} ${styles.rightCol}`}>
            <div className={styles.planetIcon}>
              <PiPlanetThin size='200px' />
            </div>
            <p>(31) 98795-8359</p>
            <div className={styles.infos}>
              {contactList?.map((item) => (
                <div key={item.label} id={item.label} className={styles.cubeContainer}>
                  <InteractiveIconTower url={item.value} icon={item.icon} />
                </div>
              ))}
            </div>
            <div className={styles.quoteContainer}>
              <blockquote>
                <Balancer ratio={1}>
                  Você não precisa ter uma discussão filosófica cada vez que coloca os dedos em um teclado, mas como a computação está se
                  espalhando cada vez mais longe na vida das pessoas, é preciso pensar sobre isso.
                  <br />— Karen Sparck Jones
                </Balancer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
