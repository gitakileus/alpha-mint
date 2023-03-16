import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landing from './pages/landing';
import Minting from './pages/minting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/mint' element={<Minting />} />
      </Routes>
      <ToastContainer toastClassName={'custom-toast-container'} 
        autoClose={3000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme={'colored'}
      />
    </BrowserRouter>
  );
}

export default App;
