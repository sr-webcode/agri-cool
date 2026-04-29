import { lazy, PropsWithChildren, Suspense } from 'react';
import { useAuth } from './context/AuthProvider';
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom';

import { Center, Spinner } from '@chakra-ui/react';
import TopBar from './components/local/TopBar';
import Login from './components/local/Login';

const Home = lazy(() => import('@/pages/Home'));
const Almanac = lazy(() => import('@/pages/Almanac'));
const MarketPlace = lazy(() => import('@/pages/MarketPlace'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

const LoadingFallback = () => {
  return (
    <Center width={'100%'} height={'100vh'}>
      <Spinner color="#32ce0e" size="lg" />
    </Center>
  );
};

const WithTopBar = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

const IndexStackElements = () => {
  const { isOpen, onClose } = useAuth().loginControls;
  return (
    <WithTopBar>
      <Outlet />
      <Login isOpen={isOpen} onClose={onClose} />
    </WithTopBar>
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <IndexStackElements />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingFallback />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="marketplace" replace />,
          },
          {
            path: 'marketplace',
            element: (
              // <Suspense fallback={<LoadingFallback />}>
              <MarketPlace />
              // </Suspense>
            ),
          },
          {
            path: 'almanac',
            element: (
              // <Suspense fallback={<LoadingFallback />}>
              <Almanac />
              // </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFound />
      </Suspense>
    ),
  },
];

function ProtectedRoute({ children }: PropsWithChildren) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isAuth) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return children;
}
