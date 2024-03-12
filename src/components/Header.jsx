import React from 'react'
import { NewBudget } from './NewBudget'
import { BudgetControl } from './BudgetControl'



export const Header = ({budget, setBudget, isValidBudget, setIsValidBudget}) => {
  return (
    <header>
        <h1>Budget App</h1>

        {isValidBudget ? (
          <BudgetControl budget={budget} />
        )
        : 
          <NewBudget 
          budget={budget} 
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
          />
        }
        
    </header>
  )
}