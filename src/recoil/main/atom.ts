import { atom } from 'recoil';

interface mainAtomInterface {
  name: string;
  value: string;
}
const mainAtom = atom<mainAtomInterface>({
  key: 'mainAtom',
  default: {
    name: 'mainAtom',
    value: 'Example Value!',
  },
});

export default mainAtom;
