import { connect } from 'react-redux'
import MainSection from '../components/MainSection.jsx'
import { getCompletedTodoCount } from '../selectors'

const mapStateToProps = (state) => ({
    todosCount: state.todos.length,
    completedCount: getCompletedTodoCount(state)
})

export default connect(mapStateToProps)(MainSection)
