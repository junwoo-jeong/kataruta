import type { ReactElement } from 'react';

import Card from '@/components/Card';

import styles from './CardList.module.css';

interface Properties {
  cardList: any[];
  onToggle: any;
}

export default function CardList({
  cardList,
  onToggle,
}: Properties): ReactElement {
  return (
    <div className={styles.CardList}>
      {cardList.map((card) => (
        <Card card={card} onToggle={onToggle} key={card.id} />
      ))}
    </div>
  );
}
