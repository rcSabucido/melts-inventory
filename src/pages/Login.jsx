import Logo from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserCircleIcon,LockClosedIcon } from "@heroicons/react/24/outline";

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

const LoginPage = () => {
  let navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({})

  // Very insecure but it works as a proof of concept ;-;
  const checkCredentials = async () => {
    const { data, error } = await supabase
      .from('Employee')
      .select()
      .eq('email', loginCredentials['email'])
      .eq('password', loginCredentials['password'])

    console.log(loginCredentials)
    console.log(data)

    if (error) {
      alert("An error occured trying to login.")
    } else if (data.length == 0) {
      alert("Invalid credentials.")
    } else {
      navigate("/home")
    }
  }

  const changeCredentials = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value
    });
  }

  return (
    <>
      <section>
        <div className="grid md:h-screen md:grid-cols-2">
          <div className="absolute inset-y-0 right-0 h-full w-9 bg-[#FFB64F]" />
          <div className="flex items-center justify-center bg-[#FFFFB8]">
            <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <div className="mb-6 ml-2 flex h-auto w-auto items-center justify-center">
                <img src={Logo} alt="" className="inline-block" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-l-lg bg-[#FFE167]">
            <div className="max-w-xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <h1 className="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] mb-8 text-2xl font-bold md:mb-7 md:text-5xl text-white">Login</h1>
              <form className="mx-auto mb-4 w-auto pb-4" name="wf-form-password" method="get">
                <h2 className="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold md:mb-3 md:text-white">Email</h2>
                <div className="relative">
                  <UserCircleIcon
                   width="25"
                   height="25"
                   viewBox="1 0 25 25"
                   fill="none"
                   stroke="#000000"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />

                  <input
                    type="email"
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333] rounded-xl"
                    maxLength="256"
                    name="email"
                    value={loginCredentials["email"]}
                    onChange={changeCredentials}
                    placeholder=""
                    required
                  />
                </div>

                <h3 className="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold md:mb-3 md:text-white">Password</h3>
                <div className="relative mb-4">
                  <LockClosedIcon 
                  width="25"
                  height="25"
                  viewBox="1 0 25 25"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"/>
                  <input
                    type="password"
                    name="password"
                    className="mb-4 block h-11 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333] rounded-xl"
                    placeholder=""
                    value={loginCredentials["password"]}
                    onChange={changeCredentials}
                    required
                  />
                </div>

                <a
                  onClick={checkCredentials}
                  className="flex items-center justify-center bg-[#f18c27] [box-shadow:rgb(251,191,36)_-8px_8px] hover:bg-amber-600 px-8 py-4 text-center font-semibold text-white transition rounded-xl"
                >
                  <p className="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] w-5xl mr-6 font-bold">Login</p>
                  <svg
                    className="h-4 w-4 flex-none"
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                  </svg>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;