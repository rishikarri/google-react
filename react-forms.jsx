function Name(props){
	return(
		<p> {props.textToDisplay}</p>
	)
}

var MyForm = React.createClass({
	getInitialState: function(){
		return {
			value: 'Test'
		}
	},
	handleChange: function(event){
		this.setState({
			value: event.target.value
		})	
		
	},
	render: function() {
		return(
			<form>				
				<label>Name: </label>				
				<input type="text" placeholder={this.state.value} onChange={this.handleChange} />
				<Name textToDisplay={this.state.value} />
			</form>
		)
	}
})

ReactDOM.render(
	<MyForm />,
	document.getElementById('form-container')
)