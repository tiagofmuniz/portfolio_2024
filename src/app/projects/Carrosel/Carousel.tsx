import { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CarouselProps {
  name?: string | '';
  github?: string | '';
  html_url?: string | '';
  images?: string[];
  cover?: string;
}

export default function Carousel({ name, github, html_url, cover, images }: CarouselProps) {
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const justifyThumbnail = images.length <= 3 ? styles.center : '';

  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainScreen}>
        <Image
          className={styles.img}
          width={1260}
          height={610}
          style={{ objectFit: 'contain' }}
          src={`/images/projects/${name}/${images[activeIndex]}`}
          alt=''
        />
      </div>
      <motion.div whileTap={{ cursor: 'grabbing' }} className={`${styles.slideNavigationContainer}`} ref={carousel}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.thumbnailContainer}  ${justifyThumbnail}`}>
          {images.map((image, index) => (
            <motion.div
              className={`${styles.thumbnailItem} ${activeIndex === index ? styles.activeItem : ''}`}
              key={image}
              onClick={() => handleItemClick(index)}>
              <figure>
                <Image className={styles.img} width={1260} height={610} src={`/images/projects/${name}/${image}`} alt='' />
                <figcaption>{`${image.replace('_', ' ').toUpperCase().replace('.gif', '').toUpperCase()}`}</figcaption>
              </figure>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
