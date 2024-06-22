import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DashboardSP500 from './components/DashboardSP500';
import DashboardBitcoin from './components/DashboardBitcoin';
import DashboardTesla from './components/DashboardTesla';
import DashboardGOOG from './components/DashboardGOOG';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "/AAPL",
      element: <Dashboard/>
    },
    {
      path: "/SPX",
      element: <DashboardSP500/>
    },
    {
      path: "/BTC",
      element: <DashboardBitcoin/>
    },
    {
      path: "/TSLA",
      element: <DashboardTesla/>
    },
    {
      path: "/GOOG",
      element: <DashboardGOOG/>
    }]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
