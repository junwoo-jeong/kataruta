import type { ReactElement } from 'react';

// Import { useRecoilValue } from 'recoil';
// Import mainAtom from '@/recoil/main/atom';
import { Link } from 'react-router-dom';

import PageTemplate from '@/components/base/PageTemplate';

// Interface Properties {}

export default function MainPage(): ReactElement {
  return (
    <PageTemplate>
      <div className="flex flex-col justify-around w-1/2 pt-24 min-h-[80vh]">
        <div className="mb-8 text-center">
          <span className="font-black tracking-widest text-white text-8xl">
            KATARUTA
          </span>
        </div>
        <Link to="/game">
          <button className="w-full py-3 text-3xl font-bold text-white shadow-2xl bg-black/[.25] rounded-xl hover:bg-black/[.35]">
            Play!
          </button>
        </Link>
      </div>
    </PageTemplate>
  );
}
