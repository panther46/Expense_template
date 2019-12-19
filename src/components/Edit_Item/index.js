import React, {useState} from 'react';
import ErrorComponent from '../Alerts_components/error';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'; 


function EditItem(){

 // Local state, category.
const [category, setItemCategory] = useState('');
// Error State, validation.
const [error, setError] = useState(false);

    function editItem(){

    }


    return(
        <div className = "container">
        <form action="#" onSubmit = {editItem}>
            <div className="row">
                <div className="col s12">
                    <h1>Edit Item</h1>
                    {(error)? <ErrorComponent/>:null}
                    <p>Item Name</p>
                        <div className="input-field col s12">
                        <label for="autocomplete-input"></label>
                        <input 
                        type = "text" 
                        id = "autocomplete-input" 
                        className = "autocomplete"
                        
                        
                        />
                        </div>
                        
                        <p>Item Price</p>
                        <div className="input-field col s12">
                        <input 
                        type="text" 
                        id="autocomplete-input" 
                        className="autocomplete"
                        
                        />
                        <label for="autocomplete-input"></label>
                        </div>
                </div>
            </div>
            <div className = "row">
            <p>Category</p>
                <div className = "col s4">
                    <p>
                        <label>
                        <input
                         type="radio"
                         className="with-gap" 
                         name="group1"
                         onChange = {e => setItemCategory(e.target.value)} 
                           />
                        <span>Desert</span>
                        </label>
                    </p>
                </div>
                <div className = "col s4">
                    <p>
                        <label>
                        <input 
                        type="radio"
                        className="with-gap" 
                        name="group1" 
                        onChange = {e => setItemCategory(e.target.value)}
                        />
                        <span>Salad</span>
                        </label>
                    </p>
                </div>
                <div className = "col s4">
                    <p>
                        <label>
                        <input 
                        type="radio" 
                        className="with-gap" 
                        name="group1" 
                        onChange ={e =>setItemCategory(e.target.value)}
                        />
                        <span>Drink</span>
                        </label>
                    </p>    
                </div>
                
                    <input type = "submit" className ="waves-effect waves-light btn-large" value="Add Item"/>
                
            </div>
        </form> 
    </div>
    )
}


export default EditItem;