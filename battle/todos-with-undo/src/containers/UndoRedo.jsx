import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            Redo
        </button>
    </p>
)

UndoRedo.propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    onRedo: PropTypes.func.isRequired,
    onUndo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
})

const mapDisPatchToProps = {
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
}

export default connect(mapStateToProps, mapDisPatchToProps)(UndoRedo)
