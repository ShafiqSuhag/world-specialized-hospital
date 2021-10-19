import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import BookAppointment from './components/pages/BookAppointment/BookAppointment';
import Home from './components/pages/home/home/Home';
import Login from './components/pages/login/Login';
import MyAccount from './components/pages/MyAccount/MyAccount';
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import './style.css';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/my-account">
              <MyAccount></MyAccount>
            </PrivateRoute>
            <PrivateRoute path="/book-appointment">
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
