/** @format */

import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Landing from '../pages/Landing';
import BlogList from '../pages/BlogList';
import BlogPost from '../pages/BlogPost';
import Photos from '../pages/Photos';
import NotFound from '../components/NotFound';

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
        element: <BlogPost />,
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
