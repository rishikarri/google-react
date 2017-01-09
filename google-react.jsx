

var Cities = React.createClass({
 	render: function(){
 		var cityRows = []; 
 		this.props.cities.map(function(city, index){
 			console.log(city.city)
 		})
 		return(
 			<h1> Hello, World. I am cold.</h1>
 		)
 	}
 });

//cities.js is global and can be accessed by this file

ReactDOM.render(
	<Cities cities={cities} />, 
	document.getElementById('cities-container')

)