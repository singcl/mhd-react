import PropTypes from 'prop-types'
import React from 'react'

const Posts = ({ posts }) => (
    <ul>{posts.map((post, i) => <li key={i}>{post.title}</li>)}</ul>
)

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts
