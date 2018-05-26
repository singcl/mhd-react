import { connect } from 'react-redux'
import TodoList from '../components/TodoList.jsx'
import { getVisibilityTodos } from '../selectors'

const mapStateToProps = (state) => ({
    filteredTodos: getVisibilityTodos(state)
})

export default connect(mapStateToProps)(TodoList)
