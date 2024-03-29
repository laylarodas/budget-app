import { useState } from 'react'
import { Header } from './components/Header'
import iconNewExpense from './img/new-expense.svg'
import { Modal } from './components/Modal';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {

      setAnimateModal(true);

    }, 500);
  }

  return (
    <div>
      <Header 
        budget={budget} 
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='new-expense'>
          <img 
            src={iconNewExpense} 
            alt="icon new expense" 
            onClick={handleNewExpense}
          />
        </div>
      )}

        {modal && (
            <Modal 
                  setModal={setModal}
                  animateModal={animateModal}
                  setAnimateModal={setAnimateModal}
            />
        )}
    </div>
  )
}

export default App
