import {useState} from 'react'
import  { Routes, Route } from 'react-router-dom';
import {getUser} from './utilities/users-service';
import NavBar from './components/NavBar'
import AuthPage from './pages/AuthPage'
import NewOrderPage from './pages/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage'


import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className='App'>
      {
        user ?(
          <>
          <NavBar  user={user} setUser={setUser}/>
        <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
        ): 
      <AuthPage setUser={setUser}/>
      }
    </div>
  )
}

export default App;
