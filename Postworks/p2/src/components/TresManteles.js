import React from 'react';
import Mantel from './Mantel';

const TresManteles = () => {
	return (
		<div className="width100 spaceAround">
			<Mantel color="green" height="85px"/>
			<Mantel/>
			<Mantel color="purple" height="75px"/>
		</div>
	);
};

export default TresManteles;