import PropTypes from 'prop-types';
import useAuth from '../Hock/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const getPathname = () => {
        const getPathname = localStorage.getItem('pathname')
        if(getPathname){
            return getPathname;
        }
        return '';
    }
    let pathname = getPathname();
    pathname = location.pathname
    localStorage.setItem('pathname', pathname)
    const {user, loading} = useAuth()
    if(loading){
        return <Loading/>
    }
    if (!user){
        return <Navigate to={'/login'}/>
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;