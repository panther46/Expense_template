import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';



function ExpenseList({item}){
    return(
        <Fragment>
            <tr>
                <td>{item.item_name}</td>
                <td>{item.price_item}</td>
                <td>{item.category}</td>
                <td><Link
                to={`/Items/edit/${item.id}`}
                className="waves-effect waves-light btn">Edit </Link>
                </td>
                <td><i class="small material-icons">delete_forever</i></td>
             </tr>
        </Fragment>
    )
}

export default ExpenseList;


                

