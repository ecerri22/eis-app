import EpokaLogo from '../img/eis_logo_2.jpg';
import { useContext, useState } from 'react';
import EisContext from "../components/context/eis"

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const {navigation, loginApp } = useContext(EisContext);

  const login = async (e) => {
    e.preventDefault();
    try {
      await loginApp(email, password);
      navigation('/homepage');
    } catch (error) {
      if (error.message === "401") {
        setErrorMessage('Invalid email or password');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='bg-blue-900 w-full'>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center	">
        <div className='bg-white w-1/4 p-8'> 
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src={EpokaLogo} alt="Logo" />
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className="space-y-6" action="#" method="POST" onSubmit={login}>

              <div>
                <label className="block text-sm font-medium leading-6 text-blue-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-blue-900">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
              </div>
            </form>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LoginPage