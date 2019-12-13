import React,{useState} from 'react';
import ErrorComponent from '../Alerts_components/error';





function AddItem(){

    // Local States
    const [ItemName, setItemName] = useState('');
    const [ItemPrice, setItemPrice] = useState('');
    const [ItemCategory, setItemCategory] = useState('');
    // Error State, validation.
    const [error, setError] = useState(false);

    // Form Method

    const AddItem = (e) => {
        e.preventDefault(); // Reseting the inputs after adding.
        if (ItemName === '' || ItemPrice === '' || ItemCategory === ''){
            setError(true);
            return; //safety stop execution
        }
        setError(false);
    }

    return(
        <div className = "container">
            <form action="#" onSubmit = {AddItem}>
                <div className="row">
                    <div className="col s12">
                        {(error)? <ErrorComponent/>:null}
                        <p>Item Name</p>
                            <div className="input-field col s12">
                            <label for="autocomplete-input">Name</label>
                            <input 
                            type = "text" 
                            id = "autocomplete-input" 
                            className = "autocomplete"
                            onChange = {e => setItemName(e.target.value)}
                            
                            />
                            </div>
                            
                            <p>Item Price</p>
                            <div className="input-field col s12">
                            <input 
                            type="text" 
                            id="autocomplete-input" 
                            className="autocomplete"
                            onChange = {e => setItemPrice(e.target.value)}
                            />
                            <label for="autocomplete-input">Price</label>
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




export default AddItem;