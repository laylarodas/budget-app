import React from 'react'
import { useState } from 'react';
import { Message } from './Message';

export const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();
        
        if(!Number(budget) || Number(budget) < 0){
            setMessage('The budget is invalid');
        }else{

        }

    }
  return (
    <div className='container-budget container shadow'>
        <form action="" className='form' onSubmit={handleBudget}>
            <div className='field'>
                <label htmlFor="">Define budget</label>
                <input type="text" className='new-budget' placeholder='Add your budget' value={budget} onChange={(e)=>{
                    setBudget(e.target.value)
                }}/>

            </div>
            <input type="submit" value="Add" />
            {message && <Message type="error">{message}</Message>}
        </form>
    </div>
  )
}
