import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import LoadingOrError from '@/components/LoadingOrError';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = lazy(async () => import('@/pages/main/MainPage'));
const GamePage = lazy(async () => import('@/pages/game/GamePage'));

export default function App(): ReactElement {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<LoadingOrError />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}
