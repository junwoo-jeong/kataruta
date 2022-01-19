import { useState, useCallback } from 'react';

const CONJUNCTION = [
  'もしかすると',
  '偶然にも',
  'だからこそ',
  'なぜなら',
  'きっと',
  'いつもは',
  '具体的には',
  'ようするに',
  'ときどき',
  'そもそも',
  'せめて',
  'やっぱり',
  'でも',
  'とつぜん',
  'ついでに',
  'できれば',
  '思えば',
  'なぜか',
  'ちなみに',
  'わりと',
  'なかなか',
];

const IMG_SRC = [
  '/icons/heart-border.svg',
  '/icons/diamond-border.svg',
  '/icons/clover-border.svg',
];

const defaultValue = [
  {
    id: 1,
    imgSrc: IMG_SRC[0],
    conjunction: CONJUNCTION[0],
    isOpen: false,
  },
  {
    id: 2,
    imgSrc: IMG_SRC[1],
    conjunction: CONJUNCTION[1],
    isOpen: false,
  },
  {
    id: 3,
    imgSrc: IMG_SRC[2],
    conjunction: CONJUNCTION[2],
    isOpen: false,
  },
];
export default function useCardList() {
  const [cardList, setCardList] = useState(defaultValue);

  const onReset = useCallback(() => {
    const landNums: number[] = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (landNums.length === 3) break;
      const landNum = Math.floor(Math.random() * CONJUNCTION.length);
      if (landNums.includes(landNum)) continue;
      landNums.push(landNum);
    }

    setCardList(
      landNums.map((landNum, idx) => {
        return {
          id: idx + 1,
          imgSrc: IMG_SRC[idx],
          conjunction: CONJUNCTION[landNum],
          isOpen: false,
        };
      })
    );
  }, [cardList]);

  const onToggle = useCallback(
    (id) =>
      setCardList(
        cardList.map((card) =>
          card.id === id ? { ...card, isOpen: !card.isOpen } : card
        )
      ),
    [cardList]
  );

  const onAllClose = useCallback(() => {
    setCardList(
      cardList.map((card) => ({
        ...card,
        isOpen: false,
      }))
    );
  }, [cardList]);

  return [cardList, setCardList, onReset, onToggle, onAllClose] as [
    typeof defaultValue,
    typeof setCardList,
    typeof onReset,
    typeof onToggle,
    typeof onAllClose
  ];
}
