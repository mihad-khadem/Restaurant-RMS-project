import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
      // Navigate User
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/"
    const {createUser, updateUserProfile } = useContext(AuthContext)
  // Hook Form Component
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
        .then(() => {
            Swal.fire("User Created");
            reset()
        })
        .catch(err => console.log(err))
        navigate(from, {replace: true})
    })
    console.log(data);
  };

  return (
    <section>
        <Helmet>
            <title>Sign Up</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && <span className="pt-2 text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Name"
                  name="photo"
                  className="input input-bordered"
                />
                {errors.name && <span className="pt-2 text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register("email", { required: true })}
                  
                  className="input input-bordered"
                />
                {errors.email && <span className="pt-2 text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", { required: true , minLength: 8 ,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/})}
                />
                <label className="label">
                {errors.password?.type === 'required' && <span className="pt-2 text-red-600">This field is required</span>}
                {errors.password?.type === 'pattern' &&
                <span className="pt-2 text-red-600">Password must contain one number, lower case, Upper Case character</span>}
                {errors.password?.type === 'minLength' &&
                <span className="pt-2 text-red-600">Password must be 8 character</span>}
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  
                </label>
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate/> <p>captcha</p>
                </label>
                <input
                  type="text"
                  placeholder="Captcha Here.."
                  name="captcha"
                  className="input input-bordered"
                />
                <button className="btn btn-outline btn-xl mt-2 uppercase font-bold">
                  Validate
                </button>
              </div> */}
              <div className="form-control mt-2">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary uppercase font-bold"
                />
              </div>
              <div>
                <p>
                  <small>
                    Already have an account?{" "}
                    <Link className="hover:underline" to={"/login"}>
                      Log In
                    </Link>{" "}
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
