import Logo from "@/components/Logo/Logo"


const LoginPage = () => {
  return (
    <div>
      <nav className="bg-transparent w-full h-[12rem] z-50">
        <Logo src="/images/nutberry-logo-black.svg" />
      </nav>


      <div className="flex items-center justify-center my-20">

        <div className="flex min-h-full flex-col border justify-center p-12 rounded-lg py-20 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className=" text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label for="email" className="block text-[12px] font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#0D68A0] sm:text-[12px] sm:leading-6 focus:outline-0 p-3" />
                </div>
              </div>

              <div>
                <div classNameName="flex items-center justify-between">
                  <label for="password" className="block text-[12px] font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#0D68A0] sm:text-[12px] sm:leading-6 focus:outline-0 p-3" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#0D68A0] p-3 font-semibold leading-6 text-white shadow-sm hover:bg-[#083f61] focus-visible:outline text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D68A0] transition-all duration-250">Sign in</button>
              </div>
            </form>


          </div>
        </div>

      </div>

    </div>
  )
}

export default LoginPage