import { forwardRef, ReactElement, Ref, useImperativeHandle } from 'react';

import Card from '@/components/Card';

import useCardList from '@/hooks/useCardList';

import styles from './CardList.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Properties {}

const CardList = (
  _props: Properties,
  ref: Ref<{ onReset: () => void }>
): ReactElement => {
  const [cardList, setCardList, onResetCardList, onToggle, onAllClose] =
    useCardList();

  useImperativeHandle(ref, () => ({
    onReset: () => {
      onAllClose();
      setTimeout(() => {
        onResetCardList();
      }, 1000);
    },
  }));

  return (
    <div className={styles.CardList}>
      {cardList.map((card) => (
        <Card card={card} onToggle={onToggle} key={card.id} />
      ))}
    </div>
  );
};

export default forwardRef(CardList);
