import React from 'react'
import closeBtn from '../img/close.svg'

export const Modal = ({setModal}) => {

    const hideModal = () => {
        setModal(false);
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
    </div>
  )
}
