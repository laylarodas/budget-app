import React, { useState } from 'react'
import closeBtn from '../img/close.svg'


export const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const hideModal = () => {
        
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

  return (
    <div className='modal '>
        <div className='close-modal'>
            <img 
                src={closeBtn} 
                alt="close modal" 
                onClick={hideModal}
            />
        </div>
        <form action="" className={`form ${ animateModal ? "animate" : "close"}`}>
            <legend>New Expense</legend>
            <div className='field'>
                <label htmlFor="name">Expense Name</label>
                <input type="text" name="name" id="name" placeholder='Introduce the expense name' value={name} onChange={(e)=> {
                    setName(e.target.value)
                }}/>

            </div>
            <div className='field'>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" placeholder='Introduce amount' value={amount} onChange={(e)=> {
                    setAmount(Number(e.target.value))
                }}/>

            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" value={category} onChange={(e)=> {
                    setCategory(e.target.value)
                }} >
                    <option value="">-- Selection --</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="variable-expenses">Variable Expenses</option>
                    <option value="free-time">Free Time</option>
                    <option value="health">Health</option>
                    <option value="Suscriptions">Suscriptions</option>
                </select>
            </div>

            <input type="submit" value="Add Expense" />
        </form>
    </div>
  )
}
