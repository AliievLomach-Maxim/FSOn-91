import styled from 'styled-components'
import { Container } from './Container'

export const Title = styled.h1`
	text-align: center;
	color: green;
`

export const NewContainer = styled(Container)`
	h3 {
		color: ${(props) => {
			return props.color
		}};
	}
`

export const NewContainer2 = styled('div')(({ color }) => {
	// const color = 'green'
	return {
		textAlign: 'center',
		color: color,
		'& h3': {
			fontWeight: 'normal',
		},
	}
})
