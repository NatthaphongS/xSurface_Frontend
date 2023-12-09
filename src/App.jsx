import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Route from './router/Router';
import { useLocation } from 'react-router-dom';

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
