import { styled } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import ProtectedRoute from './components/ProtectedRoute';
// import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';

function App() {
  const CustomApp = styled('div')(({ theme }) => ({
    backgroundColor: "#031B34",
    color: "white",
    minHeight: "100vh",
  }))


  return (
    <BrowserRouter>
      <CustomApp>
        <Header />
        <PublicRoute exact path='/' component={Homepage} />
        <PublicRoute path='/coins/:id' component={CoinPage} />
        <PrivateRoute path='/login' component={LoginPage} />
        <PrivateRoute path='/register' component={Register} />
      </CustomApp>
    </BrowserRouter>
  );
}

export default App;
