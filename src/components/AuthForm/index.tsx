import { useState } from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { Container } from './styles'

export type Mode = 'register' | 'login'

export function AuthForm() {
	const [mode, setMode] = useState<Mode>('register')

	const width = mode === 'login' ? '500px' : '700px'

	return (
		<Container width={width}>
			{ mode === 'login' ? <Login setMode={setMode} /> : <Register setMode={setMode} /> }
		</Container>
	)
}
