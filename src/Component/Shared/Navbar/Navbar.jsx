import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import useAuth from "../../../Hock/useAuth";
const Navbar = () => {
    const {user, logout} = useAuth()
    const handleLogout = () => {
        logout()
        .then(()=> {
        alert('logout')
        })
    }
    const navLink = 
    <>
     <li>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "chill" : ""
            }
        >
        Home
        </NavLink>
     </li>
    </>
    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
                </div>
                <a className="text-xl sm:text-2xl lg:text-3xl font-bold">Mazumder</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                    ?
                    <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                                    <li><a>{user?.displayName}</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>

                    </>
                    :
                    <Link className="btn" to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;