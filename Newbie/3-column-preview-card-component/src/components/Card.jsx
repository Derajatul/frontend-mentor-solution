/* eslint-disable react/prop-types */
const CardTemplate = (props) => {
    return (
        <div className="card-template p-5" style={{backgroundColor : `${props.color}`}}>
            <img src={props.icon} alt="icon"  className="my-5"/>
            <h2 className="font-bold text-3xl my-5">{props.car}</h2>
            <p className="font-normal my-5">{props.description}</p>
            <button className="bg-white px-4 py-2 my-5 rounded-3xl" style={{color : `${props.color}`}}>Learn More</button>
        </div>
    )
}
export default CardTemplate