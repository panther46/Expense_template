import React from 'react';




function AddItem(){
    return(
        <div className = "container">
            <form action="#">
                <div className="row">
                    <div className="col s12">
                        <p>Item Name</p>
                            <div className="input-field col s12">
                            <input type="text" id="autocomplete-input" class="autocomplete"/>
                            <label for="autocomplete-input">Autocomplete</label>
                            </div>
                            <p>Item Price</p>
                            <div className="input-field col s12">
                            <input type="text" id="autocomplete-input" class="autocomplete"/>
                            <label for="autocomplete-input">Autocomplete</label>
                            </div>
                    </div>
                    <div className = "col s12">
                    <p>
                        <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Desert</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Salad</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Drink</span>
                </label>
                </p>
                    </div>
            
            </div>            
            </form> 
        </div>   
    )
}




export default AddItem;