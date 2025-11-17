import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { Link } from "react-router";
import SocialLogin from "../login/socialLogin/SocialLogin";

const Register = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="card border border-gray-200 w-full max-w-sm shrink-0 ">
      <h3 className="text-4xl font-bold text-center my-3">
        Welcome to ZapShift
      </h3>
      <p className="text-center">Please Register with ZapShift</p>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
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

          <button className="btn bg-primary mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account ?{" "}
          <Link className="text-primary underline" to="/login">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
