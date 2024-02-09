import Link from "next/link";
import styles from "./ExperienceItem.module.scss";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
interface IExperienceItem {
  pathUrl?: string;
  company: string;
  position: string;
}

export default function ExperienceItem({ company, position, pathUrl }: IExperienceItem) {
  return (
    <div className={`${styles.experienceItemContainer} ${pathUrl ? styles.pointer : ""} `}>

      <Link href={`/experiences/${pathUrl}`} target="_blank">
        
        <div className={`${styles.btn} ${styles.btn_three}`}>
          <span>
            <div className={styles.experienceItem}>
              <div className={styles.linkContainer}>
                <PiSuitcaseSimpleFill className={styles.icon} />
                <div className={styles.experienceItemText}>
                  <p>{company}</p>
                  <p>{position}</p>
                </div>
              </div>
            </div>
          </span>
        </div>
      </Link>
    </div>
  );
}
