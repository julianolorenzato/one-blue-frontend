import { AuthForm } from '../AuthForm'
import { Slideshow } from '../Slideshow'
import { Container } from './styles'

export function App() {
	return (
		<Container>
			<Slideshow />
			<AuthForm />
		</Container>
	)
}
