import React from 'react'

export const BudgetControl = ({budget}) => {

    const changeFormatAmount = (amount) => {
        return amount.toLocaleString('es-ES', {
            style: 'currency', 
            currency: 'EUR'
        })
    }

  return (
    <div className='container-budget container shadow two-columns'>
        <div>
            <p>Graphic</p>
        </div>
        <div className='content-budget'>
            <p>
                <span>Budget: </span> {changeFormatAmount(budget)}
            </p>
            <p>
                <span>Available: </span> {changeFormatAmount(0)}
            </p>
            <p>
                <span>Spent: </span> {changeFormatAmount(0)}
            </p>
        </div>
    </div>
  )
}
