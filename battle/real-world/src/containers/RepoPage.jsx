import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadRepo, loadStargazers } from '../actions'
import List from '../components/List.jsx'
import Repo from '../components/Repo.jsx'
import User from '../components/User.jsx'

const loadData = (props) => {
    const { fullName } = props
    props.loadRepo(fullName, ['description'])
    props.loadStargazers(fullName)
}

/* eslint-disable react/sort-prop-types */
class RepoPage extends React.Component {
    static propTypes = {
        fullName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        owner: PropTypes.object,
        repo: PropTypes.object,
        stargazers: PropTypes.array.isRequired,
        stargazersPagination: PropTypes.object,
        loadRepo: PropTypes.func.isRequired,
        loadStargazers: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fullName !== this.props.fullName) {
            loadData(nextProps)
        }
    }

    handleLoadMoreClick = () => {
        this.props.loadStargazers(this.props.fullName, true)
    }

    renderUser(user) {
        return <User user={user} key={user.login} />
    }

    render() {
        const { repo, owner, name } = this.props
        if (!repo || !owner) {
            return (
                <h1>
                    <i>Loading {name} details...</i>
                </h1>
            )
        }

        const { stargazers, stargazersPagination } = this.props
        return (
            <div>
                <Repo repo={repo} owner={owner} />
                <hr />
                <List
                    renderItem={this.renderUser}
                    items={stargazers}
                    onLoadMoreClick={this.handleLoadMoreClick}
                    loadingLabel={`Loading stargazers of ${name}...`}
                    {...stargazersPagination}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // We need to lower case the login/name due to the way GitHub's API behaves.
    // Have a look at ../middleware/api.js for more details.
    const login = ownProps.match.params.login.toLowerCase()
    const name = ownProps.match.params.name.toLowerCase()

    const {
        pagination: { stargazersByRepo },
        entities: { users, repos }
    } = state

    const fullName = `${login}/${name}`
    const stargazersPagination = stargazersByRepo[fullName] || { ids: [] }
    const stargazers = stargazersPagination.ids.map((id) => users[id])

    return {
        fullName,
        name,
        repo: repos[fullName],
        owner: users[login],
        stargazers,
        stargazersPagination
    }
}

const mapDispatchToProps = {
    loadRepo,
    loadStargazers
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(RepoPage)
)
