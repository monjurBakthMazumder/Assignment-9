import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({data}) => {
    const {id, image, name, price, description} = data || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={`image of ${name}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <span className='font-medium'>Service charge: ${price}</span>
                <p className='text-xs text-justify'>{description.slice(0,150)}...</p>
                <div className="card-actions justify-center">
                <Link to={`/details/${id}`} className="btn btn-primary btn-sm rounded">details</Link>
                </div>
            </div>
        </div>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;