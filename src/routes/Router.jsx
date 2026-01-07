/** @format */

import { createBrowserRouter } from 'react-router';
import { Suspense, lazy } from 'react';
import Root from '../layouts/Root';
import Landing from '../pages/Landing';
import Photos from '../pages/Photos';
import NotFound from '../components/NotFound';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPost = lazy(() => import('../pages/BlogPost'));

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />,
        index: true,
      },
      {
        path: '/blogs',
        element: <BlogList />,
      },
      {
        path: 'blog/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogPost />
          </Suspense>
        ),
      },
      {
        path: '/photos',
        element: <Photos />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
