import { SignIn } from '@clerk/clerk-react'


function LoginPage() {
  return (
    <div className='hero h-screen'>
        <SignIn />
    </div>
  )
}

export default LoginPage