import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DetailsCard = (data) => {
    const { image, name, price, description} = data.data || {};
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <figure data-aos="zoom-in"><img src={image} alt={`image of ${image}`} className='w-full'/></figure>
            <div className="card-body p-0"  data-aos="zoom-in">
                <h2 className="text-2xl lg:text-3xl font-bold">{name}</h2>
                <p className='card-title'>Service charge: ${price}</p>
                <p  className='text-justify'>{description}</p>
                <div className="card-actions my-5">
                <button className="btn btn-outline btn-neutral" onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

DetailsCard.propTypes = {
    data: PropTypes.object,
};

export default DetailsCard;