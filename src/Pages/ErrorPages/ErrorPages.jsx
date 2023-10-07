import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold">404</h1>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Page not found</h1>
            <Link to={'/'} className="btn btn-outline btn-neutral">Go Home</Link>
        </div>
    );
};

export default ErrorPages;