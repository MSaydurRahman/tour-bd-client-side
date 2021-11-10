import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import About from './Components/About/About';
import AddServices from './Components/AddServices/AddServices';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path="/addservice">
              <AddServices></AddServices>
            </Route>
            <PrivateRoute exact path="/booking/:_id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/Contacts">
              <Contacts></Contacts>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
