import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import MakeAdmin from './Components/DashBoard/MakeAdmin';
import ManageOrder from './Components/DashBoard/ManageOrder';
import ManageProducts from './Components/DashBoard/ManageProducts';
import MyOrder from './Components/DashBoard/MyOrder';
import MyProduct from './Components/DashBoard/MyProduct';
import MyProfile from './Components/DashBoard/MyProfile';
import MyReview from './Components/DashBoard/MyReview';
import UpdateProfile from './Components/DashBoard/UpdateProfile';
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
      }>

      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/dashboard' element={
        <RequireAuth>
            <DashBoard></DashBoard>
        </RequireAuth>
      }>
          <Route index element={<MyOrder></MyOrder>}></Route>
            
         <Route path='review' element={<MyReview></MyReview>}></Route>
         <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='updateprofile/:id' element={<UpdateProfile></UpdateProfile>}></Route>
         <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='product' element={<MyProduct></MyProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
      </Route>
      <Route path='/singUp' element={<SingUp></SingUp>}></Route>
      <Route path='/blog' element={<Blog></Blog> }></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio> }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  
    </div>
        //     <Route path='/order' element={<MyOrder></MyOrder>}></Route>
        // <Route path='/review' element={<MyReview></MyReview>}></Route>
        // <Route path='/profile' element={<MyProfile></MyProfile>}></Route>
  );
}

export default App;
