import styles from "./Header.module.scss";
import Logomarca from "./Logomarca";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className={styles.header_container}>
      <Logomarca customWidth="medium" />
      <Menu />
    </header>
  );
}
