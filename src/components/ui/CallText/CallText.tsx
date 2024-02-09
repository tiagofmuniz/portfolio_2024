import Link from "next/link";
import styles from "./CallText.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

interface CallTextProps {
  text: string;
  direction: string;
  linkUrl?: string;
}

export default function CallText({ text, direction, linkUrl }: CallTextProps) {
  return (
    <Link href={linkUrl} className={`${styles.callTextContainer} ${styles[direction]}`}>
      <FaArrowRightLong />
      <span>{text}</span>
    </Link>
  );
}
