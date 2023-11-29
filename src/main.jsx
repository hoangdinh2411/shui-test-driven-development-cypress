import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Messages from './pages/Messages.jsx';
import Post from './pages/Post.jsx';
const router = createBrowserRouter(
  [
    {
      index: true,
      path: '/',
      element: <Messages />,
    },
    {
      path: '/post',
      element: <Post />,
    },
  ],
  {
    base: '/shui-test-driven-development-cypress',
  }
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
