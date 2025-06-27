import { GoogleLoginButton } from '../components/GoogleLoginButton'
import { UseHelmet } from '../hooks/UseHelmet'

interface Props {
  onLogin: (credentialResponse: unknown) => void
}

export const Login = ({ onLogin }: Props) => {
  UseHelmet('Login')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h2>Sign in to Ride It</h2>
      <GoogleLoginButton onSuccess={onLogin} />
    </div>
  )
}
