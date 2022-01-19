import { ReactElement, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import PageTemplate from '@/components/base/PageTemplate';
import CardList from '@/components/CardList';
import SentenceText from '@/components/SentenceText';

// Hooks
import useCardList from '@/hooks/useCardList';
import useSentence from '@/hooks/useSentence';

// Interface Properties {}

export default function GamePage(): ReactElement {
  /** Hooks */
  const [cardList, setCardList, onResetCardList, onToggle] = useCardList();

  const sentenceRef = useRef<{ onReset: () => void }>(null);
  const cardListRef = useRef<{ onReset: () => void }>(null);

  const onClickReset = () => {
    if (sentenceRef.current && cardListRef.current) {
      sentenceRef.current.onReset();
      cardListRef.current.onReset();
    }
  };

  // Const onClickReset = () => {
  //   SetIsLoding(true);
  //   SetTimeout(() => {
  //     SetIsLoding(false);
  //     OnResetCardList();
  //     OnResetSentence();
  //   }, 2000);
  // };

  return (
    <PageTemplate>
      <div className="w-9/12 pt-24">
        <div className="mb-12">
          <Link to="/">
            <span className="text-6xl font-black tracking-widest text-white">
              KATARUTA
            </span>
          </Link>
        </div>
        <div className="flex flex-row justify-center p-2 mb-10 border shadow-2xl border-white/[.1] bg-white/[.05] rounded-xl">
          <SentenceText ref={sentenceRef} />
        </div>
        <div className="flex flex-row gap-2 h-[500px]">
          <div className="flex flex-col justify-center p-2 border shadow-2xl border-white/[.1] bg-white/[.05] grow rounded-xl">
            <CardList ref={cardListRef} />
          </div>
        </div>
        <button
          onClick={onClickReset}
          className="absolute w-1/2 px-4 py-2 text-4xl font-bold text-white shadow-2xl bg-black/[.25] grow rounded-xl bottom-96 left-1/4 hover:bg-black/[.35]"
        >
          Reset!
        </button>
      </div>
    </PageTemplate>
  );
}
