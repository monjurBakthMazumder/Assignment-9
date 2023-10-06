import PropTypes from 'prop-types';

const HomeCard = ({data}) => {
    console.log(data);
    const {image, name, price} = data || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={`image of ${name}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <span className='font-medium'>Service charge: {price}$</span>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary btn-sm rounded">details</button>
                </div>
            </div>
        </div>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;