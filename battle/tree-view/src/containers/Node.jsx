import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Node extends React.Component {
    handleIncrementClick = () => {
        const { increment, id } = this.props
        increment(id)
    }

    handleRemoveClick = (e) => {
        e.preventDefault()

        const { removeChild, deleteNode, parentId, id } = this.props
        removeChild(parentId, id)
        deleteNode(id)
    }

    handleAddChildClick = (e) => {
        e.preventDefault()

        const { addChild, createNode, id } = this.props
        const childId = createNode().nodeId
        addChild(id, childId)
    }

    renderChild = (childId) => {
        const { id } = this.props
        return (
            <li key={childId}>
                <ConnectedNode id={childId} parentId={id} />
            </li>
        )
    }

    render() {
        const { counter, parentId, childIds } = this.props
        return (
            <div>
                Counter: {counter}{' '}
                <button onClick={this.handleIncrementClick}>+</button>{' '}
                {typeof parentId !== 'undefined' && (
                    <a // eslint-disable-line jsx-a11y/href-no-hash
                        href="#"
                        onClick={this.handleRemoveClick}
                        style={{ color: 'lightgray', textDecoration: 'none' }}
                    >
                        x
                    </a>
                )}
                <ul>
                    {/* 当childIds为空数组的时候返回也是空数组从而递归停止 */}
                    {childIds.map(this.renderChild)}
                    <li key="add">
                        <a // eslint-disable-line jsx-a11y/href-no-hash
                            href="#"
                            onClick={this.handleAddChildClick}
                        >
                            Add child
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

Node.propTypes = {
    addChild: PropTypes.func.isRequired,
    childIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ).isRequired,
    counter: PropTypes.number.isRequired,
    createNode: PropTypes.func.isRequired,
    deleteNode: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    increment: PropTypes.func.isRequired,
    parentId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeChild: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
    return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)

export default ConnectedNode
