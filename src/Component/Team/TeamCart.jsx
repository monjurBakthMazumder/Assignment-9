import PropTypes from 'prop-types';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
const TeamCart = ({team}) => {
    const {name,image} = team || {};
    return (
        <div className="card card-compact">
            <figure className='w-52 h-52 rounded-full'><img src={image} alt={`image of ${name}`} /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <div className="flex justify-center items-center gap-2 text-3xl">
                    <AiFillFacebook className='cursor-pointer text-blue-600'/>
                    <AiFillInstagram className='cursor-pointer text-rose-600'/>
                    <AiFillTwitterSquare className='cursor-pointer text-sky-500'/>
                </div>
            </div>
        </div>
    );
};

TeamCart.propTypes = {
    team: PropTypes.object,
};

export default TeamCart;