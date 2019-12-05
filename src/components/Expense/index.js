import React from 'react';
import ExpenseList from './expense_list';



function Expenses() {
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
                    <ExpenseList/> 
                </tbody>
            </table>
        </div>
    )
}


export default Expenses;