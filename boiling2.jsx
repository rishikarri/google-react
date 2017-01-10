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

//create a try convert function 

function tryConvert(convertMeToWhat, temperature){
	if(convertMeToWhat === "convertMeToFahrenheit"){
		var convertedNumber = (temperature * 9 / 5 ) + 32	

	}else if(convertMeToWhat === "convertMeToCelsius"){
		var convertedNumber = (temperature-32) * 5 /9; 
	}
	return convertedNumber;
}

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

		if(tempUnit == "celsius"){
			var cTemp = temperature;
			var fTemp = tryConvert('convertMeToFahrenheit', temperature)
		}else{
			var fTemp = temperature;
			var cTemp = tryConvert('convertMeToCelsius', temperature)
		}
		return(
			<div>
				<TemperatureInput onChange={this.handleCelsiusChange} unitType="Celsius" />
				<TemperatureInput onChange={this.handleFahrenheitChange} unitType="Fahrenheit"/>
				<BoilingVerdict cTemp={Number(cTemp)} /> 
			</div>
		)
	}
})


ReactDOM.render(
	<Calculator />, 
	document.getElementById("boiling")
)