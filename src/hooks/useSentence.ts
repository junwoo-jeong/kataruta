import { useState, useCallback } from 'react';

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

const defaultValue = {
  id: 0,
  sentence: SENTENCE[0],
};

export default function useSentence() {
  const [sentence, setSentence] = useState(defaultValue);

  const onReset = useCallback(() => {
    const landNum = Math.floor(Math.random() * SENTENCE.length);

    setSentence({
      id: landNum,
      sentence: SENTENCE[landNum],
    });
  }, [sentence]);

  return [sentence, setSentence, onReset] as [
    typeof defaultValue,
    typeof setSentence,
    typeof onReset
  ];
}
