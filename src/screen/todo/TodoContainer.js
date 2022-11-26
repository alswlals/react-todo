import React, { useState } from 'react'
import TodoPresenter from './TodoPresenter'

const TodoContainer = (props) => {
    
    const [counter, setCounter] = useState(0)
    const [doubleCounter, setdoubleCounter] = useState(1)


    const handleClickCounter = () => {
        setCounter(counter+1)
    }
    const handleDoubleCounter = () => {
        setdoubleCounter(doubleCounter*2)
    }

  return (
    <TodoPresenter 
        number={counter}
        double={doubleCounter}
        onClickCounter={handleClickCounter}
        onClickCounter1={handleDoubleCounter}
    />
  )
}

export default TodoContainer