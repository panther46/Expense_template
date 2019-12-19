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
// Wrapper state to reload the page after redirection
const [reloadingWrapper, setReloadingWrapper] = useState(true);

  useEffect(()=>{
    const requestQueryApi = async () => {
      if(reloadingWrapper){
    const query = await axios.get('http://localhost:4000/items');
    setResult(query.data);
    //console.log(query.data); // testing by console
      } // end of conditional reloading wrapper
  }
  setReloadingWrapper(false); // back to false the wrapper.
  requestQueryApi();
  
  },[reloadingWrapper]);




  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
            <Route exact path = "/Expenses" render = { () => (<Expenses Result = {Result} />)} />
            <Route exact path = "/new-item" render = {()=> (<AddItem setReloadingWrapper = {setReloadingWrapper}/>)}/>
            <Route exact path = "/Items/edit/:id" render ={(props) => {
              const ItemIdInt =  parseInt(props.match.params.id); // Generated props from router dom. converting to INT.

              const itemFilter = Result.filter(item => item.id === ItemIdInt); // Filter the main state Result with a condition, The ID on dbJson and the props.
              console.log(itemFilter[0]); // Testing iteration output
              return(
                <EditItem
                Item = {itemFilter[0]}
                />
              )
            }}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
