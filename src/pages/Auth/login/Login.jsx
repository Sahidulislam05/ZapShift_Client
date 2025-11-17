import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { Link } from "react-router";
import SocialLogin from "./socialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div className="card border border-gray-200 w-full max-w-sm shrink-0 ">
        <h3 className="text-4xl font-bold text-center my-3">Welcome Back</h3>
        <p className="text-center">Login with ZapShift</p>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required.</p>
            )}
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
              })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required.</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer.
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                “ Password must be at least 6 characters long, contain uppercase
                and lowercase letters, at least one number, at least one special
                character, and no spaces.”
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-primary mt-4">Login</button>
          </fieldset>
          <p>
            New to ZapShift ?{" "}
            <Link className="text-primary underline" to="/register">
              Register
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
