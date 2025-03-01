import Logo from "../assets/logo.jpg"

const LoginPage = () => {
  return (
    <>
    <section>
    <div class="grid md:h-screen md:grid-cols-2">
    <div class="absolute inset-y-0 right-0 h-full w-9 bg-[#FFB64F]" ></div>
    <div class="flex items-center justify-center bg-[#FFFFB8]">
    <div class="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div class="mb-6 ml-2 flex h-auto w-auto items-center justify-center">
          <img src={Logo} alt="" class="inline-block" />
        </div>
    </div>
    </div>

    <div class="flex flex-col items-center justify-center rounded-l-lg bg-[#FFE167]">
    <div class="max-w-xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <h1 class="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] mb-8 text-2xl font-bold md:mb-7 md:text-5xl text-white">Login</h1>
    <form class="mx-auto mb-4 w-auto pb-4" name="wf-form-password" method="get">
    <h2 class="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold md:mb-3 md:text-white">Username</h2>
    <div class="relative">
    <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="25" 
            height="25" 
            viewBox="1 0 25 25"
            fill="none" 
            stroke="#000000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block">
            <circle 
            cx="12" cy="12" r="10">
            </circle>
            <circle 
            cx="12" cy="10" r="3">
            </circle>
            <path 
            d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662">
            </path>
      </svg>

          <input type="email" class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333] rounded-xl" maxlength="256" name="name" placeholder="" required="" />
      </div>
      
      <h3 class="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-2xl font-bold md:mb-3 md:text-white">Password</h3>
      <div class="relative mb-4">
      <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="25" 
            height="25" 
            viewBox="1 0 25 25" 
            fill="none" 
            stroke="#000000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block">
            <circle cx="12" cy="16" r="1"></circle><rect x="3" y="10" width="18" height="12" rx="2"></rect>
            <path d="M7 10V7a5 5 0 0 1 10 0v3">
            </path>
            </svg>

            <input type="password" class="mb-4 block h-11 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333] rounded-xl" placeholder="" required="" />
          </div>

          <a href="#" class="flex items-center justify-center bg-[#f18c27] [box-shadow:rgb(251,191,36)_-8px_8px] hover:bg-amber-600 px-8 py-4 text-center font-semibold text-white transition rounded-xl">
            <p class="[text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] w-5xl mr-6 font-bold">Login</p>
            <svg class="h-4 w-4 flex-none" fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </a>
    </form>
    </div>
    </div>
    </div>
    </section>
    </>
  );
}

export default LoginPage;