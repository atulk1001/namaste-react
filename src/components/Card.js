const Card = (props) => {
    const { resData } = props;
    const { name, cuisine, stars, time, image } = resData;
    return (
        <div className="m-4 p-4 w-70 h-96 bg-zinc-100 rounded-lg hover:shadow-xl hover:border-2 border-sky-100">
            <img alt={name} className="w-64 h-60 rounded-lg" src={image}></img>
            <div className="m-2 p-2">
            <h5 className="font-bold">{name}</h5>
            <h6>{cuisine}</h6>
            <h6>{stars} Stars</h6>
            <h6>{time} Mins</h6>
            </div>
        </div>
    );
};
export default Card;