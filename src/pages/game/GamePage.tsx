import { ReactElement, useState } from 'react';

import PageTemplate from '@/components/base/PageTemplate';
import CardList from '@/components/CardList';
import useCardList from '@/hooks/useCardList';
import TypingText from '@/components/TypingText';

import { Link } from 'react-router-dom';

// Interface Properties {}

export default function GamePage(): ReactElement {
  const SENTENCE = [
    '今までで一番の失敗は＿＿＿＿＿です。',
    'ロールモデルは＿＿＿＿さんです。',
    '人生で一番よかった選択は＿＿＿です。',
    '一番学びたい技術は＿＿＿です。',
    'この一週間、一番ありがたい人は＿＿さんです。',
    'この一週間、一番申し訳ない人は＿＿さんです。',
    '死ぬまでにやってみたいことは＿＿＿＿です。',
    '一番の自慢は＿＿＿です。',
    '自分を動物で例えると＿＿＿です。',
  ];

  /** Hooks */
  const [cardList, setCardList, onResetCardList, onToggle] = useCardList();

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
        <div className="p-2 mb-10 border shadow-2xl border-white/[.1] bg-white/[.05] rounded-xl">
          <div className="text-center">
            <TypingText />
            {/* <span className="text-5xl ">asdasdasdasdasdasdasdasdas</span> */}
          </div>
        </div>
        <div className="flex flex-row gap-2 h-[500px]">
          <div className="flex flex-col justify-center p-2 text-center border shadow-2xl border-white/[.1] bg-white/[.05] grow rounded-xl">
            <CardList cardList={cardList} onToggle={onToggle} />
          </div>
        </div>
        <button
          onClick={onResetCardList}
          className="absolute w-1/2 px-4 py-2 text-4xl font-bold text-white shadow-2xl bg-black/[.25] grow rounded-xl bottom-96 left-1/4 hover:bg-black/[.35]"
        >
          Reset!
        </button>
      </div>
    </PageTemplate>
  );
}
