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
                       key = {Result.id} // key in DB
                       item = {item} // item
                       /> 
                       ))}
                </tbody>
            </table>
        </div>
    )
}


export default Expenses;