import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList from '../components/TodoList.jsx'
import { getVisibilityTodos } from '../selectors'

const mapStateToProps = (state) => ({
    filteredTodos: getVisibilityTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
