import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import UploadPage from '../pages/UploadPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/uploadProduct',
    element: <UploadPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
