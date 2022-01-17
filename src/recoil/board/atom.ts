import { atom } from 'recoil';

type KatarutaCard = {
  conjunction: string;
  isOpen: boolean;
};

interface boardAtomInterface {
  katarutaCardList: KatarutaCard[];
}

const boardAtom = atom<boardAtomInterface>({
  key: 'boardAtom',
  default: {
    katarutaCardList: [
      {
        conjunction: '되니?',
        isOpen: false,
      },
    ],
  },
});

export default boardAtom;
