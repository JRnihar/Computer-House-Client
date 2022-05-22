import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blog';
import Home from './Components/Pages/Home';
import MyPortfolio from './Components/Pages/MyPortfolio';
import PartsDetails from './Components/Pages/Tooles/PartsDetails';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';
// import Loading from './Components/Shared/Loading';
import Login from './Components/Shared/Login';
import NotFound from './Components/Shared/NotFound';
import RequireAuth from './Components/Shared/RequireAuth';
// import RequireAuth from './Components/Shared/RequireAuth';
import SingUp from './Components/Shared/SingUp';

function App() {
  return (
    <div>
    
      <Header>    </Header>
   
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Home' element={<Home></Home>}></Route>
      <Route path='/Home/:Id' element={
        <RequireAuth>
            <PartsDetails></PartsDetails>
        </RequireAuth>
      }></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/singUp' element={<SingUp></SingUp>}></Route>
      <Route path='/blog' element={<Blog></Blog> }></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio> }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  
    </div>
  );
}

export default App;
