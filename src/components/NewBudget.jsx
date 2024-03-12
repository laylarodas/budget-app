import React from 'react'

export const NewBudget = ({budget, setBudget}) => {
  return (
    <div className='container-budget container shadow'>
        <form action="" className='form'>
            <div className='field'>
                <label htmlFor="">Define budget</label>
                <input type="text" className='new-budget' placeholder='Add your budget' value={budget} onChange={(e)=>{
                    setBudget(e.target.value)
                }}/>

            </div>
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}
