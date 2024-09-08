const Card = (props) => {
    const { resData } = props;
    const { name, cuisine, stars, time, image } = resData;
    return (
        <div className="card">
            <img alt={name} className="card-image" src={image}></img>
            <h5>{name}</h5>
            <h6>{cuisine}</h6>
            <h6>{stars} Stars</h6>
            <h6>{time} Mins</h6>
        </div>
    );
};
export default Card;