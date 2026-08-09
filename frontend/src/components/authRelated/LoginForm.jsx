import Button from "../shared/Button";
import InputField from "../shared/InputField";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-2xl font-bold  text-gray-800 text-center">Login</h3>
      <p className="mt-2 text-[16.5px] text-gray-600 text-center">
        Enter your credentials to get started.
      </p>

      <form className="mt-6 space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon="mail"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon="lock"
        />

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="text-red-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button className="w-full ">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
