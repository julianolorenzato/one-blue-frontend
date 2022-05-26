import styled from 'styled-components'
import theme from '../../theme'

interface ContainerProps {
	width: string
}

export const Container = styled.div<ContainerProps>`
	height: 100vh;
	width: ${p => p.width};
	background-color: #111;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	transition: all 0.4s;

	input {
		border-radius: ${theme.borderRadius};
		font-size: 1.25rem;
		background-color: white;
		padding-left: 10px;
		border: 1px solid ${theme.colors.aux};
		outline: none;
		height: 50px;
	}

	button {
		border-radius: ${theme.borderRadius};
		background-color: ${theme.colors.aux};
		font-size: 1.5rem;
		height: 50px;
		cursor: pointer;

		&:hover {
			background-color: ${theme.colors.auxHover};
		}
	}
`

export const RegisterContainer = styled.form`
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	grid-template-areas:
		'. .'
		'phrase phrase'
		'input1 input2'
		'input3 input3'
		'input4 input4'
		'signup signup'
        'msg msg'
		'. .'
		'access access'
		'. .';
`

export const LoginContainer = styled.form`
	width: 80%;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 20px;
	grid-template-areas:
		'.'
		'insert'
		'input3'
		'input4'
		'forgot'
		'.'
		'signin'
        'msg'
		'.'
		'register'
		'.';
`

export const InputFirstName = styled.input`
	grid-area: input1;
`
export const InputLastName = styled.input`
	grid-area: input2;
`
export const InputEmail = styled.input`
	grid-area: input3;
`
export const InputFullName = styled.input`
	grid-area: input3;
`
export const InputPassword = styled.input`
	grid-area: input4;
`

export const Highlight = styled.p`
	font-size: 1.5rem;
	grid-area: phrase;

	span {
		padding: 10px;
		background: ${theme.gradient};
	}
`
export const Forgot = styled.span`
	grid-area: forgot;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`
export const Access = styled.span`
	grid-area: access;

	span {
		color: ${theme.colors.primary};
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`

export const Register = styled.span`
	grid-area: register;

	span {
		color: ${theme.colors.primary};
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`

export const Insert = styled.span`
	grid-area: insert;
`

export const SignIn = styled.button`
	grid-area: signin;
`
export const SignUp = styled.button`
	grid-area: signup;
`

interface IResultMsg {
	color: 'greenyellow' | 'crimson'
}

export const ResultMsg = styled.span<IResultMsg>`
	grid-area: msg;
	color: ${p => p.color};
`
