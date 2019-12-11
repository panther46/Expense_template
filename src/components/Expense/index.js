import React from 'react';
import ExpenseList from './expense_list';



function Expenses({Result}) {
    return(
        <div className = "container">
            <table>
                <thead>
                <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody>
                    {Result.map(item => (
                       <ExpenseList
                       key = {item.id} // key in DB, must be the "item on iteration result.map(xxx)"
                       item = {item} // item
                       /> 
                       ))}
                </tbody>
            </table>
        </div>
    )
}


export default Expenses;