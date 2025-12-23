/** @format */

import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Photos from '../pages/Photos';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:slug',
        element: <BlogPost />,
      },
      {
        path: '/photos',
        element: <Photos />,
      },
    ],
  },
]);

export default router;
