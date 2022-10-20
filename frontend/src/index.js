import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodingProjects from './pages/CodingProjects'
import ArchProjects from './pages/ArchProjects'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import Deatils from "./pages/Deatils";

export default function AppTry() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App/>} />
          <Route path="CodingProjects" element={<CodingProjects/>} />
          <Route path="ArchProjects" element={<ArchProjects />} />
          <Route path="details/:id" element={<Deatils/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppTry/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
