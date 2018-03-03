import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    incrementIfOdd() {
        // 偶数 & 1 = 0
        // 奇数 & 1 = 1
        if (!(this.props.value & 1)) {
            this.props.onIncrement()
        }
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Click: {value} times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd}>Increment If Odd</button>
                <button onClick={this.incrementAsync}>Increment Async</button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired       
}

export default Counter
