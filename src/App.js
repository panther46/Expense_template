import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/index';
import Expenses from './components/Expense/index';
import AddItem from './components/Add_Item/index';
import EditItem from './components/Edit_Item/index';


function App() {

const [Result, setResult] = useState([]);

useEffect(()=>{
  const requestQueryApi = async () => {
  const query = await axios.get('http://localhost:4000/items');
  setResult(query.data);
  console.log(query.data); // testing by console
}
requestQueryApi();

},[]);

  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
            <Route exact path = "/Expenses" render = { () => (<Expenses Result = {Result} />)} />
            <Route exact path = "/new-item" component = {AddItem}/>
            <Route exact path = "/Items/edit/:id" component ={EditItem}/>
      </Router>
     
    </div>
  );
}

export default App;
