import type { ReactElement } from 'react';

// Import { useRecoilValue } from 'recoil';
// Import mainAtom from '@/recoil/main/atom';

import PageTemplate from '@/components/PageTemplate';

// Interface Properties {}

export default function Template(): ReactElement {
  return (
    <PageTemplate>
      <div className="w-11/12 bg-transparent border-4 shadow rounded-xl border-slate-900/[.15] h-1/2">
        <main className="flex flex-col h-full p-2 gap-y-4">
          <div className="flex justify-around flex-1 flex-low">
            <span className="glow">logo</span>
          </div>
          <div className="flex items-center justify-center flex-1 flex-low grow">
            <div className="">config section</div>
            <div className="">description section</div>
          </div>
          <div className="flex justify-center flex-1 flex-low">
            <span>footer</span>
          </div>
        </main>
      </div>
    </PageTemplate>
  );
}
