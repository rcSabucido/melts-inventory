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
    <h1 class="mb-8 text-2xl font-bold md:mb-7 md:text-5xl text-white">Login</h1>
    <form class="mx-auto mb-4 w-auto pb-4" name="wf-form-password" method="get">
    <h2 class="text-2xl font-bold md:mb-3 md:text-white">Username</h2>
    <div class="relative">
          <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
          <input type="email" class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333] rounded-xl" maxlength="256" name="name" placeholder="" required="" />
      </div>
      <h3 class="text-2xl font-bold md:mb-3 md:text-white">Password</h3>
      <div class="relative mb-4">
            <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
            <input type="password" class="mb-4 block h-11 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333] rounded-xl" placeholder="" required="" />
          </div>
          <a href="#" class="flex items-center justify-center bg-[#f18c27] hover:bg-amber-600 px-8 py-4 text-center font-semibold text-white transition rounded-xl">
            <p class="w-5xl mr-6 font-bold">Login</p>
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