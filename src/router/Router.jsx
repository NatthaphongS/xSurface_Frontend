import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import UploadPage from '../pages/UploadPage';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList key="productList" />,
  },
  {
    path: '/product/:id',
    element: <ProductPage key="ProductPage" />,
  },
  {
    path: '/uploadProduct',
    element: <UploadPage key="uploadPage" />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
