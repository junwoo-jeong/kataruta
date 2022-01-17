import { atom } from 'recoil';

interface constAtomInterface {
  sentenceList: string[];
  conjunctionList: string[];
}
const constAtom = atom<constAtomInterface>({
  key: 'constAtom',
  default: {
    sentenceList: [
      '今までで一番の失敗は＿＿＿＿＿です。',
      'ロールモデルは＿＿＿＿さんです。',
      '人生で一番よかった選択は＿＿＿です。',
      '一番学びたい技術は＿＿＿です。',
      'この一週間、一番ありがたい人は＿＿さんです。',
      'この一週間、一番申し訳ない人は＿＿さんです。',
      '死ぬまでにやってみたいことは＿＿＿＿です。',
      '一番の自慢は＿＿＿です。',
      '自分を動物で例えると＿＿＿です。',
    ],
    conjunctionList: [
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
    ],
  },
});

export default constAtom;
