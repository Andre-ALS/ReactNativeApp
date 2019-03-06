import React, { Component } from 'react';
import { View } from 'react-native';

import uberxImage from '../../assets/uberx.png'

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';

class Details extends Component {
	render() {
		return (
			<Container>
				<TypeTitle>Popular</TypeTitle>
				<TypeDescription>Descrição do titutlo</TypeDescription>
				
				<TypeImage source={uberxImage}/>
				<TypeTitle>UberX</TypeTitle>
				<TypeDescription>R$6,00</TypeDescription>

				<RequestButton onPres={() => {}}>
					<RequestButtonText>Solcitar uberx</RequestButtonText>
				</RequestButton>
			</Container>
		)
	}
}

export default Details;
