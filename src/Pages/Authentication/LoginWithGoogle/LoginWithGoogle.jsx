import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth";
import swal from 'sweetalert';
const LoginWithGoogle = () => {
    const navigate = useNavigate()
    const {loginWithGoogle} = useAuth();
    const pathname = localStorage.getItem('pathname')
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result=> {
            console.log(result.user);
            navigate(pathname ? pathname : '/')
            swal("Successful!", "Successfully login!", "success");
            updateProfile(result.user, {
                displayName: result?.user?.displayName, 
                photoURL: result?.user?.photoURL
            })
        })
        .catch(error=> {
            console.error(error);
        })
    }
    return ( 
        <div className="p-8 pb-0">
            <button className="btn flex justify-center items-center gap-3 w-full" onClick={handleGoogleLogin}><FcGoogle className="mt-1 text-2xl"/> Login with Google</button>
            <div className="divider mb-0">OR</div>
        </div>
    );
};

export default LoginWithGoogle;