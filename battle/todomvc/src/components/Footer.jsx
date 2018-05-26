import PropTypes from 'prop-types'
import React from 'react'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoFilters'
import FilterLink from '../containers/FilterLink.jsx'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_COMPLETED]: 'Completed',
    [SHOW_ACTIVE]: 'Active'
}

const Footer = (props) => {
    const { activeCount, completedCount, onClearCompleted } = props
    const itemWord = activeCount === 1 ? 'item' : 'items'
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount || 'No'}</strong>
                {itemWord} left
            </span>

            <ul className="filters">
                {Object.keys(FILTER_TITLES).map((filter) => (
                    <li key={filter}>
                        <FilterLink filter={filter}>
                            {FILTER_TITLES[filter]}
                        </FilterLink>
                    </li>
                ))}
            </ul>

            {!!completedCount && (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear completed
                </button>
            )}
        </footer>
    )
}

Footer.propTypes = {
    activeCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired
}

export default Footer
