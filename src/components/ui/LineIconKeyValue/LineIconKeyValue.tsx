import styles from './LineIconKeyValue.module.scss';

export default function LineIconKeyValue({ icon, label, value, url }) {
  return (
    <div className={styles.lineIconKeyValue_container}>
      {icon}
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
