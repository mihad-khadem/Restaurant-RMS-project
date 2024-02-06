import React from "react";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    //! Implemented social login
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            // console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,

            }
            axiosPublic.post('/api/v1/users', userInfo)
            .then(res => {
                // console.log(res);
                if(res.status === 200){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'WelCome',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                navigate('/')
            })
        })
        .catch(err => {
            // console.log(err);
            if (err) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: `${err.message}`,
                  showConfirmButton: false,
                  timer: 1500
                })}
        })
    }
  return (
    <div className="flex justify-center">
      <button onClick={handleGoogleSignIn} className="btn btn-circle"><FaGoogle/></button>
    </div>
  );
};

export default SocialLogin;
