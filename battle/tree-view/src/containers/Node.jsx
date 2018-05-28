import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Node extends React.Component {
    handleIncrementClick = () => {
        const { increment, id } = this.props
        increment(id)
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
                {typeof parentId !== undefined && (
                    <a // eslint-disable-line jsx-a11y/href-no-hash
                        href="#"
                        onClick={this.handleRemoveClick}
                        style={{ color: 'lightgray', textDecoration: 'none' }}
                    >
                        x
                    </a>
                )}
                <ul>
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
    childIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    counter: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    parentId: PropTypes.number
}

function mapStateToProps(state, ownProps) {
    return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)

export default ConnectedNode
