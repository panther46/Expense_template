import React,{Fragment} from 'react';



function ExpenseList({item}){
    return(
        <Fragment>
            <tr>
                <td>{item.item_name}</td>
                <td>{item.price_item}</td>
                <td>{item.category}</td>
                <td>Buttons Here</td>
             </tr>
        </Fragment>
    )
}

export default ExpenseList;