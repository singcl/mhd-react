import PropTypes from 'prop-types'
import React from 'react'

const Counter = ({
    increment,
    incrementIfOdd,
    incrementAsync,
    decrement,
    counter
}) => (
    <div>
        Clicked: {counter} times &nbsp;
        <button onClick={increment}>+</button>{' '}
        <button onClick={decrement}>-</button>{' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>{' '}
        <button onClick={() => incrementAsync()}>incrementAsync </button>
    </div>
)

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired
}

export default Counter
