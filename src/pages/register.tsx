import { useState } from 'react';
import { UserRegister } from '../actions/authActions';

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const onChangeCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.id]: e.target?.value });
  };

  const onSubmit = () => {
    if (credentials.password !== credentials.passwordConfirm) {
      // TODO: Notification
      return;
    }
    UserRegister(credentials.username, credentials.email, credentials.password);
  };
  return (
    <div className="flex flex-col justify-center px-6 py-12 w-[700px] lg:px-12 lg:py-16 lg:bg-base-200 lg:rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Create New account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" action="#" method="POST">
          <div className="flex gap-x-3">
            <div className="flex-1">
              <label className="block text-sm font-medium leading-6 ">Username</label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={onChangeCredentials}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium leading-6 ">Email address</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={onChangeCredentials}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6">Password</label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeCredentials}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6">Confirm Password</label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeCredentials}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={onSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Try Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
