import React from 'react'
import closeBtn from '../img/close.svg'

export const Modal = ({setModal, animateModal, setAnimateModal}) => {

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
                <input type="text" name="name" id="name" placeholder='Introduce the expense name' />

            </div>
            <div className='field'>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" placeholder='Introduce amount' />

            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
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
