import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { CustomerHome } from './pages/CustomerHome';
import { CustomerOrder } from './pages/CustomerOrder';
import { CustomerRequestHome } from './pages/CustomerRequestHome';
import { CustomerOrderConfirm } from './pages/CustomerOrderConfirm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/customer' element={<CustomerHome />} />
      <Route path='/customer/order' element={<CustomerOrder />} />
      <Route path='/customer/request' element={<CustomerRequestHome />} />
      <Route path='/customer/order/confirm' element={<CustomerOrderConfirm />} />
    </Routes>
  </BrowserRouter>
);
