function toCelcius(f){
	return (f-32) * 5 /9; 
}

function toFahrenheit(c){
	return (c * 9 / 5 ) + 32;
}

function BoilingVerdict(props) {
    if (props.celcius >= 100) {
        return (
            <p>The water would boil at {props.celcius}</p>
        )
    }
    else {
        return (
            <p>The water would NOT boil at {props.celcius}</p>
        )
    }
}

// Make another utility function that tries the conversion. If it can, it returns the conversion rouned. If it can't, it returns an empty string

function tryConvert(value, tUnit){
	var tryNumber = Number(value)
	if (isNaN(tryNumber)){
		//this is not a valid number - what is your problem user?
		return ''
	}else{
		// this is a valid number, we can convert
		if(tUnit == 'c'){
			var convertedNumber = toFahrenheit(tryNumber);
		}else{
			var convertedNumber = toCelcius(tryNumber);
		}
		return convertedNumber;
	}
	
}

var TemperatureInput = React.createClass ({
    getInitialState: function() {
        return {
            value: ''
        }
    },

    handleChange: function(event) {
    	this.props.onChange(event.target.value)

    },
    render: function() {
    	var value = this.props.value;
    	var tUnits = this.props.tUnits;
        return (
            <div>
                <label>Enter temperature in question in {this.props.tUnits}</label>
                <input placeholder="temp" value={this.state.value} onChange={this.handleChange} />
                
            </div>
        )
    }
});


var Calculator = React.createClass({
    getInitialState: function() {
        return {
            value: 0,
            tUnits: 'c'
        }
    },

    handleChange: function(event) {
        this.setState ({
            value: event.target.value
        })
    },

    handleCelciusChange: function(value){
    	this.setState({
    		scale: 'c',
    		value: value
    	})
    }

    handleFahrenheitChange: function(value){
    	this.setState({
    		scale: 'f',
    		value: value
    	})
    }

    render: function() {
        // var userEnteredTemp = this.state.value;
        var scale = this.state.scale;
        var value = this.state.value;
        if(this.state.scale == 'c'){
        	var fTemp = tryConvert(value, 'c')
        	var cTemp = value; 
        }else if(this.state.scale == 'f'){
        	var fTemp = value;
        	var cTemp = tryConvert(value, 'f');
        }
        return (
            <div>
                <TemperatureInput tUnits="Celcius" value={cTemp} onChange={this.handleCelciusChange}/>
                <TemperatureInput tUnits="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celcius={Number(cTemp)} />
                
            </div>
        )
    }
});


ReactDOM.render (
    <Calculator />,
    document.getElementById('boiling')
)