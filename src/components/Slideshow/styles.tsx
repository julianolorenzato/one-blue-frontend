import styled from 'styled-components'

interface ContainerProps {
	slide: string
}

export const Container = styled.div<ContainerProps>`
	height: 100vh;
	width: 200px;
	flex-grow: 1;
	align-items: center;
    position: relative;

	.my-node-enter {
		opacity: .1;
	}

	.my-node-enter-active {
		opacity: 1;
		transition: opacity 1s;
	}

	.my-node-exit {
		opacity: 1;
	}

	.my-node-exit-active {
		opacity: 0;
		transition: opacity 1s;
	}

	.my-node-exit-done {
		opacity: 0;
	}

	div {
		height: 100%;
		width: 100%;
	}
`

export const Slide = styled.img`
    position: absolute;
    top: 0;
    right: 0;
	object-fit: cover;
	height: 100%;
	width: 100%;
`

export const Logo = styled.img`
	position: absolute;
    bottom: 80%;
    right: 80%;
`
