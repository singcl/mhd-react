import PropTypes from 'prop-types'
import React from 'react'

/* eslint-disable react/sort-prop-types */
class List extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        nextPageUrl: PropTypes.string,
        pageCount: PropTypes.number,
        items: PropTypes.array.isRequired,
        renderItem: PropTypes.func.isRequired,
        onLoadMoreClick: PropTypes.func.isRequired,
        loadingLabel: PropTypes.string.isRequired
    }

    static defaultProps = {
        isFetching: true,
        loadingLabel: 'Loading...'
    }

    renderLoadMore() {
        const { isFetching, onLoadMoreClick } = this.props
        return (
            <button
                style={{ fontSize: '150%' }}
                onClick={onLoadMoreClick}
                disabled={isFetching}
            >
                {isFetching ? 'Loading...' : 'Load More'}
            </button>
        )
    }

    render() {
        const {
            isFetching,
            nextPageUrl,
            pageCount,
            items,
            renderItem,
            loadingLabel
        } = this.props

        const isEmpty = items.length === 0
        if (isEmpty && isFetching) {
            return (
                <h2>
                    <i>{loadingLabel}</i>
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
                {pageCount > 0 && !isLastPage && this.renderLoadMore()}
            </div>
        )
    }
}

export default List
