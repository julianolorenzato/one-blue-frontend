import { FormEvent, useState } from 'react'
import { requestToBackend } from '../../utils/request'
import { Mode } from './index'
import * as Styles from './styles'
import { object, string, ValidationError } from 'yup'

interface IRegister {
	setMode: (mode: Mode) => void
}

interface IData {
	firstName: string
	lastName: string
	email: string
	password: string
}

interface IResult {
	status?: 'fail' | 'success'
	msg?: string
}

export function Register({ setMode }: IRegister) {
	const [data, setData] = useState<IData>({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})

	const [result, setResult] = useState<IResult>({})

	const validate = async (): Promise<boolean> => {
		const schema = object({
			firstName: string().required('First name field is empty'),
			lastName: string().required('Last name field is empty'),
			email: string()
				.email('Email format is invalid')
				.required('Email field is empty'),
			password: string().required('Password field is empty')
		})

		try {
			await schema.validate(data)

			setResult({
				status: 'success',
				msg: 'Registered successfully!'
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

	const handleFirstNameChange = (e: FormEvent) => {
		const target = e.target as HTMLInputElement
		setData({ ...data, firstName: target.value })
	}

	const handleLastNameChange = (e: FormEvent) => {
		const target = e.target as HTMLInputElement
		setData({ ...data, lastName: target.value })
	}

	const handleEmailChange = (e: FormEvent) => {
		const target = e.target as HTMLInputElement
		setData({ ...data, email: target.value })
	}

	const handlePasswordChange = (e: FormEvent) => {
		const target = e.target as HTMLInputElement
		setData({ ...data, password: target.value })
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const dataIsValid = await validate()

		if (dataIsValid) {
			const resp = await requestToBackend.post('/user/cadaster', {
				name: data.firstName + ' ' + data.lastName,
				password: data.password
			})

			console.log(resp.data)
		}
	}

	return (
		<Styles.RegisterContainer onSubmit={handleSubmit}>
			<Styles.Highlight>
				Register and start seeing the <span>beauty</span> in the world
			</Styles.Highlight>

			<Styles.InputFirstName
				onChange={handleFirstNameChange}
				value={data.firstName}
				type="text"
				placeholder="First name"
			/>
			<Styles.InputLastName
				onChange={handleLastNameChange}
				value={data.lastName}
				type="text"
				placeholder="Last name"
			/>
			<Styles.InputEmail
				onChange={handleEmailChange}
				value={data.email}
				type="text"
				placeholder="Email"
			/>
			<Styles.InputPassword
				onChange={handlePasswordChange}
				value={data.password}
				type="password"
				placeholder="Password"
			/>

			<Styles.SignUp type="submit">Sign Up</Styles.SignUp>

			<Styles.ResultMsg
				color={result.status === 'success' ? 'greenyellow' : 'crimson'}
			>
				{result.msg}
			</Styles.ResultMsg>

			<Styles.Access>
				Already have an account?{' '}
				<span onClick={() => setMode('login')}>Access</span>
			</Styles.Access>
		</Styles.RegisterContainer>
	)
}
