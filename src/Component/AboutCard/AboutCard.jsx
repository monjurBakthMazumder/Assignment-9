import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutCard = ({data}) => {
    const {id, image, name} = data || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={`image of ${name}`} /></figure>
            <div className="card-body">
                <Link to={`/details/${id}`} className="card-title hover:text-blue-700">{name}</Link>
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    data: PropTypes.object,
};

export default AboutCard;