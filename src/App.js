import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  Home,
  Expenses,
  ExpenseDetail
} from './pages';
import { Layout, ExpenseLayout } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/expenses" element={<ExpenseLayout />}>
            <Route path="/" element={<Expenses />}/>
            <Route path="/:id" element={<ExpenseDetail />}/>
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
