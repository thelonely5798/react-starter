import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { counterSelector, increment } from '../redux/counterSlice';



const Example = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector(counterSelector)

    const handleClick = () => { 
        dispatch(increment())
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <h2>number: {counter.number} </h2>
        </div>
    )
}


export default Example