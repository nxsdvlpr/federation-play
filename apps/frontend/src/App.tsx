import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './error-page';
import { action as destroyAction } from './modules/contact/pages/destroy';
import Contact, {
  loader as contactLoader,
} from './modules/contact/pages/detail';
import EditContact, {
  action as editAction,
} from './modules/contact/pages/edit';
import Root, {
  action as rootAction,
  loader as rootLoader,
} from './modules/home/pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
