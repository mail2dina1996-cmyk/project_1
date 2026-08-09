import LoginForm from "../components/authRelated/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex w-full items-center justify-center bg-red-500 p-8 lg:w-1/2">
          <div className="text-center text-white">
            <h2 className="text-3xl font-semibold">Welcome Back</h2>
            <p className="mt-2 text-sm opacity-90">
              Sign in to continue access to your account.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-gray-100 p-8 lg:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
