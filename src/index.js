import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './scss/main.scss';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Quotes from './Routes/Quotes';
import Layout from './Components/Layout';
import Navmenu from './Components/Navmenu';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Navmenu />
        <div style={{ width: '100%' }}>
          <Routes>
            <Route exact path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
