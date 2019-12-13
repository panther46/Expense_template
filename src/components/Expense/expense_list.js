import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';




function ExpenseList({item}){
    const eliminarItem = () =>{
        // Function to delete a item
        console.log("testing deleting");
        return("");
    }
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
                <td><Link
                className="small material-icons"
                onClick ={()=>eliminarItem()} // pending, make icon clickable 
                >delete_forever</Link></td>
                
             </tr>
        </Fragment>
    )
}

export default ExpenseList;


                

