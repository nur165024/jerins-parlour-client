import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../src/Component/Home/Home/Home';
import AddAdmin from './Component/Admin/AddAdmin/AddAdmin';
import AddService from './Component/Admin/AddService/AddService';
import OrderList from './Component/Admin/OrderList/OrderList';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Book from './Component/User/Book/Book';
import BookList from './Component/User/BookList/BookList';
import Review from './Component/User/Review/Review';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/admin/order">
          <OrderList></OrderList>
        </Route>
        <Route path="/admin/add/service">
          <AddService></AddService>
        </Route>
        <Route path="/add/admin">
          <AddAdmin></AddAdmin>
        </Route>
        <Route path="/user/book">
          <Book></Book>
        </Route>
        <Route path="/user/book-list">
          <BookList></BookList>
        </Route>
        <Route path="/user/review">
          <Review></Review>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
