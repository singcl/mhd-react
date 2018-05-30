import PropTypes from 'prop-types'
import React from 'react'

/* eslint-disable react/sort-prop-types */
class List extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        nextPageUrl: PropTypes.string,
        pageCount: PropTypes.number,
        items: PropTypes.array.isRequired,
        renderItem: PropTypes.func.isRequired
    }

    render() {
        const {
            isFetching,
            nextPageUrl,
            pageCount,
            items,
            renderItem
        } = this.props

        const isEmpty = items.length === 0
        if (isEmpty && isFetching) {
            return (
                <h2>
                    <i>Loading...</i>
                </h2>
            )
        }

        const isLastPage = !nextPageUrl
        if (isEmpty && isLastPage) {
            return (
                <h1>
                    <i>Nothing here!</i>
                </h1>
            )
        }

        return (
            <div>
                {items.map(renderItem)}
                {/* {pageCount > 0 && } */}
            </div>
        )
    }
}

export default List
