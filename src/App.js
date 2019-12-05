import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/index';
import Expenses from './components/Expense/index';
import AddItem from './components/Add_Item/index';


function App() {

const [Result, setResult] = useState([]);

useEffect(()=>{
  const requestQueryApi = async () => {
  const query = await axios.get('http://localhost:4000/items');
  console.log(query.data);
}
requestQueryApi();

},);

  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
            <Route exact path = "/Expenses" component = {Expenses}/>
            <Route exact path = "/new-item" component = {AddItem}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
