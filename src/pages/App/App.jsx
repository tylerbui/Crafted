import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  //everytime you refresh the page its right here where you check the localstorage in your dev tools 
  const [user, setUser] = useState(getUser());
  //Leaving cart at the highest level because we're going to need to pass the data to the cart in multiple pages 
  const [cart, setCart] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Products />} />
              {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
              {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
