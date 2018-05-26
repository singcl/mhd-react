import PropTypes from 'prop-types'
import React from 'react'
import VisibilityTodos from '../containers/VisibilityTodos.jsx'
import Footer from './Footer.jsx'

const MainSection = ({ todosCount, completedCount }) => (
    <section className="main">
        {!!todosCount && (
            <span>
                <input
                    type="checkbox"
                    className="toggle-all"
                    checked={completedCount === todosCount}
                />
                <label htmlFor="" />
            </span>
        )}

        <VisibilityTodos />

        {!!todosCount && (
            <Footer
                completedCount={completedCount}
                activeCount={todosCount - completedCount}
            />
        )}
    </section>
)

MainSection.propTypes = {
    completedCount: PropTypes.number.isRequired,
    todosCount: PropTypes.number.isRequired
}

export default MainSection
