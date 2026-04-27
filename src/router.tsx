import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Almanac = lazy(() => import('@/pages/Almanac'));
const MarketPlace = lazy(() => import('@/pages/MarketPlace'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const routes = [
  {
    path: '/',
    // element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'almanac',
        element: (
          <Suspense fallback={<div>Loading almanac...</div>}>
            <Almanac />
          </Suspense>
        ),
      },
      {
        path: 'marketplace',
        element: (
          <Suspense fallback={<div>Loading marketplace...</div>}>
            <MarketPlace />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
];
