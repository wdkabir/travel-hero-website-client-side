import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Footer from './Components/Shared/Footer/Footer';
import Destination from './Components/Destination/Destination';
import About from './Components/About/About';
import Packages from './Components/Packages/Packages';
import Contact from './Components/Contact/Contact';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import Addpackages from './Components/Addpackages/Addpackages';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/destination">
              <Destination></Destination>
            </Route>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addpackages">
              <Addpackages></Addpackages>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
