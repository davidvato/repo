import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';
import PropTypes from 'prop-types';

class Mantel extends React.Component{
constructor(props){
	super(props)
	this.state={
		color: 'darksalmon',
		height: '100px'
	}
}

render() {
	return (
		<div
			style={{ backgroundColor: this.props.color || this.state.color, height: this.props.height || this.state.height }}
			className="mantel spaceAround">
				<Cubierto />
				<Plato />
				<Cubierto />
		</div>
	)
}
}

Mantel.propType = {
	color: PropTypes.string
}


export default Mantel;