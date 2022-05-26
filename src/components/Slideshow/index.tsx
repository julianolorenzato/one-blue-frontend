import { Container, Slide, Logo } from './styles'
import logo from '../../assets/images/stories-app.png'
import images from './images'
import { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export function Slideshow() {
	const [slideNumber, setSlideNumber] = useState(0)

	const play = () => {
		const length = images.length

		if (slideNumber === length - 1) {
			setSlideNumber(0)
		} else {
			setSlideNumber(prev => prev + 1)
		}
	}

	useEffect(() => {
		const intervalId = setInterval(play, 5000)

		return () => clearInterval(intervalId)
	}, [slideNumber])

	return (
		<Container slide={images[slideNumber]}>
			<TransitionGroup >
				<CSSTransition key={slideNumber} timeout={1000} classNames="my-node">
					<Slide src={images[slideNumber]} alt="slideshow of beautiful images" />
				</CSSTransition>
			</TransitionGroup>
			<Logo src={logo} alt="s" />
		</Container>
	)
}
