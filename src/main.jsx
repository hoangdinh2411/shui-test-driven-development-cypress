import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Messages from './pages/Messages.jsx';
import Post from './pages/Post.jsx';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Messages />,
    },
    {
      path: '/post',
      element: <Post />,
    },
  ],
  {
    basename: '/',
  }
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
