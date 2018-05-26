import PropTypes from 'prop-types'
import React from 'react'
import VisibilityTodos from '../containers/VisibilityTodos.jsx'
import Footer from './Footer.jsx'

const MainSection = ({ todosCount, completedCount, actions }) => (
    <section className="main">
        {!!todosCount && (
            <span>
                <input
                    type="checkbox"
                    className="toggle-all"
                    checked={completedCount === todosCount}
                />
                <label onClick={actions.completeAllTodos} />
            </span>
        )}

        <VisibilityTodos />

        {!!todosCount && (
            <Footer
                completedCount={completedCount}
                activeCount={todosCount - completedCount}
                onClearCompleted={actions.clearCompleted}
            />
        )}
    </section>
)

MainSection.propTypes = {
    actions: PropTypes.object.isRequired,
    completedCount: PropTypes.number.isRequired,
    todosCount: PropTypes.number.isRequired
}

export default MainSection
