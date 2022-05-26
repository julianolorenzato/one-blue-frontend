import { FormEvent, useState } from 'react'
import { requestToBackend } from '../../utils/request'
import { Mode } from './index'
import * as Styles from './styles'
import { object, string, ValidationError } from 'yup'

interface ILogin {
	setMode: (mode: Mode) => void
}

interface IData {
	fullName: string
	password: string
}

interface IResult {
	status?: 'fail' | 'success'
	msg?: string
}

export function Login({ setMode }: ILogin) {
	const [data, setData] = useState<IData>({
		fullName: '',
		password: ''
	})

	const [result, setResult] = useState<IResult>({})

	const validate = async (): Promise<boolean> => {
		const schema = object({
			fullName: string().required('Full name field is empty'),
			password: string().required('Password field is empty')
		})

		try {
			await schema.validate(data)

			setResult({
				status: 'success',
				msg: 'Logged in successfully!'
			})

			return true
		} catch (e) {
			const error = e as ValidationError
			setResult({
				status: 'fail',
				msg: error.message
			})
			return false
		}
	}

	const handleFullNameChange = (e: FormEvent) => {
		const target = e.target as HTMLInputElement
		setData({ ...data, fullName: target.value })
	}

	const handlePasswordChange = (e: FormEvent) => {
		const target = e.target as HTMLInputElement
		setData({ ...data, password: target.value })
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const dataIsValid = await validate()

		if (dataIsValid) {
			const resp = await requestToBackend.post('login', {
				name: data.fullName,
				password: data.password
			})

			console.log(resp.data)
		}
	}

	return (
		<Styles.LoginContainer onSubmit={handleSubmit}>
			<Styles.Insert>Enter your credentials</Styles.Insert>

			<Styles.InputFullName
				value={data.fullName}
				onChange={handleFullNameChange}
				type="text"
				placeholder="Full name"
			/>

			<Styles.InputPassword
				value={data.password}
				onChange={handlePasswordChange}
				type="password"
				placeholder="Password"
			/>

			<Styles.Forgot>I forgot my password</Styles.Forgot>

			<Styles.SignIn type="submit">Sign In</Styles.SignIn>

			<Styles.ResultMsg
				color={result.status === 'success' ? 'greenyellow' : 'crimson'}
			>
				{result.msg}
			</Styles.ResultMsg>

			<Styles.Register>
				Don't have an account?{' '}
				<span
					onClick={() => {
						setMode('register')
					}}
				>
					Register
				</span>
			</Styles.Register>
		</Styles.LoginContainer>
	)
}
