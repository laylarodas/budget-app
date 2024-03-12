import React from 'react'

export const BudgetControl = ({budget}) => {
  return (
    <div className='container-budget container shadow two-columns'>
        <div>
            <p>Graphic</p>
        </div>
        <div className='content-budget'>
            <p>
                <span>Budget: </span> €{budget}
            </p>
        </div>
    </div>
  )
}
