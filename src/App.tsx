import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import LoadingOrError from '@/components/LoadingOrError';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = lazy(async () => import('@/pages/main/MainPage'));

export default function App(): ReactElement {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<LoadingOrError />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}
