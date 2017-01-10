function BoilingVerdict(props){
	if(props.cTemp > 100){
		return(
			<h1>Be careful! It is boiling</h1>			
		)
	}else{
		return(
			<h1>You need to turn up the temperature in order to achieve a boiling state</h1>
		)
	}
}

var TemperatureInput = React.createClass({
	handleChange: function(){
		this.props.onChange(event.target.value)
	},

	render: function(){
		return(
			<div>
				<label> Enter temp in {this.props.unitType} </label>
				<input type="text" placeholder="Current Temperature" onChange={this.handleChange} />
			</div>
		)
		
	}
})


var Calculator = React.createClass({
	getInitialState: function(){
		return(	
			{
				temperature: 0, 
				tempUnit: "celsius"
			}
		)
	},

	handleCelsiusChange: function(value){
		this.setState({
			temperature: value,
			tempUnit: "celsius"

		})
	},

	handleFahrenheitChange: function(value){
		this.setState({
			temperature: value,
			tempUnit: "fahrenheit"
		})
	},

	render: function(){
		var tempUnit = this.state.tempUnit;
		var temperature = this.state.temperature;

		if(this.state.tempUnit == "celsius"){
			var cTemp = this.state.temperature;
			var fTemp = tryConvert('convertMeToFahrenheit', this.state.temperature)
		}else{
			var fTemp = this.state.temperature;
			var cTemp = tryConvert('convertMeToCelsius', this.state.temperature)
		}
		return(
			<div>
				<TemperatureInput onChange={this.handleCelsiusChange} unitType="Celsius" />
				<TemperatureInput onChange={this.handleFahrenheitChange} unitType="Fahrenheit"/>
				<BoilingVerdict cTemp={101} /> 
			</div>
		)
	}
})


ReactDOM.render(
	<Calculator />, 
	document.getElementById("boiling")
)