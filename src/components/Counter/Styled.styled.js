import styled, { css, keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const animation = (props) =>
	css`
		animation: ${pulse} ${`${props.$animationLength} infinite alternate`};
	`
// OR >
// css`
// 	animation: ${pulse} ${'0.3s infinite alternate'};
// `

export const PulseButton = styled.button`
	${animation};
`
