import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp({ onLogin, users, setUsers }) {
  //todo
  //^ stylize this page way better

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');

  const [errorArray, setErrorArray] = useState([]);
  const [errorsExist, setErrorsExist] = useState(false);
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // function checkError(response) {
  //   if (response.status >= 200 && response.status <= 299) {
  //     return response.json();
  //   } else {
  //     //~ render the proper error from the backend to the error here
  //     throw response;
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/new_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        email: email,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((newUser) => {
          console.log('newUser: ', newUser);

          setErrorArray([]);
          setErrorsExist(false);
          setSuccess('Your post has been created!');
          setSubmitted(true);
        });
      } else {
        response.json().then((e) => {
          console.log('e. errors within bad response: ', e.errors);
          // set the errorString to e.errors.join(*join with a comma*)
          setErrorsExist(true);
          setErrorArray(e.errors);
          console.log('errorArray state within bad response: ', errorArray);
        });
      }
    });
  }

  return (
    <div>
      <div className='form-control'>
        <form onSubmit={handleSubmit}>
          {errorsExist !== false ? (
            <div className='shadow-lg alert alert-warning'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                {errorArray.map((eachError) => (
                  <span>{eachError}</span>
                ))}
              </div>
            </div>
          ) : null}
          <label className='input-group'>
            <label className='username-entry'>
              <span class='text uppercase font-extralight'>username</span>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className='password-entry'>
              <span class='text uppercase font-extralight'>password</span>
              <input
                type='text'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className='password-confirmation'>
              <span class='text uppercase font-extralight'>
                confirm password
              </span>
              <input
                type='text'
                id='passwordConfirmation'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </label>
            <label className='email-entry'>
              <span class='text uppercase font-extralight'>email</span>
              <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </label>
          <br />
          <button type='submit' class='btn btn-ghostfont-bold uppercase'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
