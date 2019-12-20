import React, {useState,useRef} from 'react';
import ErrorComponent from '../Alerts_components/error';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'; 


function EditItem({Item}){

 // Local state, category.
const [category, setItemCategory] = useState('');
// Error State, validation.
const [error, setError] = useState(false);

// REFS declaration.
const ItemNameRef = useRef('');
const ItemPriceRef = useRef('');



    function editItem(e){
        e.preventDefault();

        // Validation of category input, if the user does not change the category Item.category (defaultchecked) will be, counter the same state value.
        let categoryItemEdition = (category === '') ? Item.category : category;
        console.log(categoryItemEdition);
        // Obtain Values:
        const edit = {
            price_item: ItemPriceRef.current.value,
            item_name:ItemNameRef.current.value,
            category: categoryItemEdition,
        }
        console.log(edit);

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
                        ref = {ItemNameRef} // ref
                        defaultValue = {Item.item_name} // default value
                        
                        
                        />
                        </div>
                        
                        <p>Item Price</p>
                        <div className="input-field col s12">
                        <input 
                        type="text" 
                        id="autocomplete-input" 
                        className="autocomplete"
                        ref = {ItemPriceRef} // ref 
                        defaultValue = {Item.price_item} // default radio
                        
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
                         defaultChecked = {Item.category === 'postre'}  // default radio
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
                        defaultChecked = {Item.category === 'Salad'} // default value radio
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
                        defaultChecked = {Item.category === 'Drink'}  // default value radio
                        />
                        <span>Drink</span>
                        </label>
                    </p>    
                </div>
                
                    <input type = "submit" className ="waves-effect waves-light btn-large" value="Edit Item"/>
                
            </div>
        </form> 
    </div>
    )
}


export default EditItem;