import React from 'react';
import styles from './Logomarca.module.scss';
import Link from 'next/link';

export default function Logomarca({ customWidth }: any) {
  return (
    <Link href='/'>
      <div className={`${styles.logomarca_container} `} data-custom-width={customWidth}>
        <span>
          tiago<b>muniz</b>
        </span>
      </div>
    </Link>
  );
}
