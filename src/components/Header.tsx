import type { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import mainAtom from '@/recoil/main/atom';

// Interface Properties {}

export default function Header(): ReactElement {
  const example = useRecoilValue(mainAtom);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-xl">{example.name}</h1>
    </div>
  );
}
