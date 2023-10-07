import PropTypes from 'prop-types';

const WorkCard = ({work}) => {
    const {name, image} = work;
    return (
        <div className="card border">
        <div className="card-body py-2 px-5 rounded">
            <h2 className="card-title">{name}</h2>
        </div>
        <figure className='h-48'><img src={image} alt={`image of ${name}`} className='h-full w-full'/></figure>
        </div>
    );
};

WorkCard.propTypes = {
    work: PropTypes.object,
};

export default WorkCard;