import React from 'react'
import { useState } from 'react';
import { Message } from './Message';

export const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

    const [message, setMessage] = useState('');
    
    ;
    const handleBudget = (e) => {
        e.preventDefault();
        
        if(!budget || budget < 0){
            setMessage('The budget is invalid');
            return;
        }

        setMessage('');
        setIsValidBudget(true);
    }
  return (
    <div className='container-budget container shadow'>
        <form action="" className='form' onSubmit={handleBudget}>
            <div className='field'>
                <label htmlFor="">Define budget</label>
                <input type="number" className='new-budget' placeholder='Add your budget' value={budget} onChange={(e)=>{
                    setBudget(Number(e.target.value))
                }}/>

            </div>
            <input type="submit" value="Add" />
            {message && <Message type="error">{message}</Message>}
        </form>
    </div>
  )
}
