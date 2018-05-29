import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../actions'
import Counter from '../components/Counter.jsx'

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CounterActions, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
