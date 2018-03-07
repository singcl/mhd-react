import React from 'react'
import FilterLink from '../containers/FilterLink'
import { visibilityFilters } from '../actions'

const Footer = () => (
    <p>
        SHOW:
        <FilterLink filter={visibilityFilters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
        <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
            COMPLETED
        </FilterLink>
    </p>
)

export default Footer
