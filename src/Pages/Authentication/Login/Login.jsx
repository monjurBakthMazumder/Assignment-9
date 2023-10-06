import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";
import useAuth from "../../../Hock/useAuth";
import swal from 'sweetalert';
const Login = () => {
    const [isShow,setIsShow] = useState(false)
    const navigate = useNavigate()
    const {loginUser} = useAuth()
    const pathname = localStorage.getItem('pathname')
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        //login user 
        loginUser(email, password)
        .then(result=>{
            console.log(result.user);
            navigate(pathname ? pathname : '/')
            swal("Successful!", "Successfully login!", "success");
        })
        .catch(err => {
            console.error(err.message);
        })
    }
    return (
        <div className="hero min-h-[75vh] my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <LoginWithGoogle/>
                <form className="card-body pt-2" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input 
                            type={ isShow ? 'text' : "password" }
                            name="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full pr-10" 
                            required />
                        <span 
                            className="absolute -ml-8 mt-3 text-2xl cursor-pointer"
                            onClick={()=> setIsShow(!isShow)}
                        >{isShow ? <AiFillEyeInvisible/> : <AiFillEye/>}
                        </span>
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-xs text-center mt-5">New here? please <Link to={'/register'} className="text-blue-600 cursor-pointer underline font-bold">Register</Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;