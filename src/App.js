
import React from 'react';
import './App.scss';
import AdminTemplate from './containers/Admintemplate/AdminTemplate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer position='top-right' />
      <AdminTemplate />
    </div>
  );
}

export default App;
