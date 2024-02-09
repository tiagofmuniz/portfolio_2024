import Image from "next/image";
import styles from "./Hero.module.scss";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <Image src="/images/zyro_image.png" className={styles.profile_img} width={300} height={300} alt="" />

      <div className={styles.hero_text}>
        <p>
          <Balancer ratio={0.5} preferNative={false}>Formado em Sistemas de informação, possuo experiência em desenvolvimento web com ênfase com no ecossistema JavaScript, abrangendo tecnologias como React, Next e Node.</Balancer>
        </p>
        <p>
          Apaixonado por transformar ideias em realidade por meio da programação. Estou ansioso para mergulhar ainda mais nesse universo fascinante e contribuir para a construção de soluções inovadoras.
        </p>
      </div>
    </div>
  );
};

export default Hero;
