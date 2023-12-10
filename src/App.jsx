import { ToastContainer } from 'react-toastify';
import Route from './router/Router';

function App() {
  return (
    <>
      <Route />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
