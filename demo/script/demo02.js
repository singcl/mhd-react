class InputControlES6 extends React.Component {
	constructor(props) {
		super(props)

		// set initial state
		this.state = {
			text: props.initialValue || 'placeholder'
		}

		// ES6 类中函数必须手动绑定
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	render() {
		return (
			<div>
                Type Something:
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
            </div>
		)
	}
}

InputControlES6.propTypes = {
	initialValue: React.PropTypes.string
}
InputControlES6.defaultProps = {
	initialValue: ''
}

ReactDOM.render(<InputControlES6 initialValue = "Marco"/>, document.getElementById('react-root'))