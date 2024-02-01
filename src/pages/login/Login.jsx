import React, { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  // Captcha Ref

  // Navigate User
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/"
  // Auth Context
  const {signIn} = useContext(AuthContext)

  const [ disabled, setDisabled ] = useState(true);
  // Load captcha engine
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          if(user){
            Swal.fire({
              title: "Good job!",
              text: "User Login Successful",
              icon: "success"
            });
          }else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
          navigate(from, {replace: true})
        })

        }
        const handleValidateCaptcha = (e) => {
          const user_captcha_value = e.target.value;
          console.log("User Captcha Value:", user_captcha_value);
        
          try {
            // Add console logs here for debugging
            if (validateCaptcha(user_captcha_value)) {
              setDisabled(false);
            } else {
              setDisabled(true);
              alert('Wrong captcha');
            }
          } catch (error) {
            console.error("Captcha Validation Error:", error);
          }
        };
  return ( 
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate/>
                </label>
                <input
                onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder='Captcha Here..'
                  name="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
               <input disabled={disabled} type="submit" value="Login" className="btn btn-primary uppercase font-bold" />
              </div>
              <div>
              <p><small>New Here? <Link className="hover:underline" to={'/signup'}>Create Account</Link> </small></p>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
