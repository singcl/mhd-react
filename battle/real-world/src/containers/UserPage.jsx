import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadStarred, loadUser } from '../actions'

const loadData = ({ login, loadUser, loadStarred }) => {
    loadUser(login, ['name'])
    loadStarred(login)
}

class UserPage extends React.Component {
    static propTypes = {
        login: PropTypes.string.isRequired,
        user: PropTypes.object
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        const { user, login } = this.props
        if (!user) {
            return (
                <h1>
                    <i>
                        Loading {login}
                        {"'s profile..."}{' '}
                    </i>
                </h1>
            )
        }
        return <div>{this.props.login}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    // We need to lower case the login due to the way GitHub's API behaves.
    // Have a look at ../middleware/api.js for more details.
    const login = ownProps.match.params.login.toLowerCase()

    const {
        pagination: { starredByUser },
        entities: { users, repos }
    } = state

    return {
        login,
        user: users[login]
    }
}

const mapDispatchToProps = { loadUser, loadStarred }

// react - router 提供了一个withRouter组件
// withRouter可以包装任何自定义组件，将react - router 的 history, location, match 三个对象传入。
// 无需一级级传递react - router 的属性，当需要用的router 属性的时候，将组件包一层withRouter，就可以拿到需要的路由信息
// 正常情况下 只有Router 的component组件能够自动带有三个属性
// 如果使用了react-router-redux,则可以直接从state 中的router 属性中获取location。不需要再使用withRouter 获取路由信息了
// component={UserPage} 已经注入了三个路由对象， 这里再使用withRouter 合适吗？
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserPage)
)
