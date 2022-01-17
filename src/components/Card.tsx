import type { ReactElement } from 'react';

import styles from './Card.module.css';

interface Properties {
  card: any;
  onToggle: any;
}

export default function Card({ card, onToggle }: Properties): ReactElement {
  return (
    <div
      className={`${styles['card']} ${card.isOpen ? styles['opened'] : ''}`}
      onClick={() => onToggle(card.id)}
    >
      <img src={card.imgSrc} className={styles['label']} alt="" />
      <div className={styles['text1']}>
        <div className={styles['text-content']}>
          <h1 className={styles['title']}>{card.conjunction}</h1>
        </div>
      </div>
      <svg
        className={styles['chevron']}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 35"
        width="30"
      >
        <path d="M5 30L50 5l45 25" fill="none" stroke="#000" strokeWidth="5" />
      </svg>
    </div>
  );
}
