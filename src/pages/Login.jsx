export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white text-gray-500 max-w-md w-full md:p-8 p-6 text-left text-sm rounded-2xl shadow-lg">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full bg-transparent border border-gray-300/50 outline-none rounded-full py-3 px-4 focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            className="w-full bg-transparent border border-gray-300/50 outline-none rounded-full py-3 px-4 focus:ring-2 focus:ring-indigo-400 transition"
          />

          <div className="text-right">
            <a className="text-blue-600 underline text-sm" href="#">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 py-3 rounded-full text-white font-medium hover:bg-indigo-600 transition"
          >
            Log in
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 underline">
            Signup
          </a>
        </p>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center bg-black py-3 rounded-full text-white hover:bg-gray-900 transition"
          >
            <img
              className="h-5 w-5"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
              alt="appleLogo"
            />
            Log in with Apple
          </button>

          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center bg-white border border-gray-300 py-3 rounded-full text-gray-800 hover:bg-gray-50 transition"
          >
            <img
              className="h-5 w-5"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
              alt="googleFavicon"
            />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
