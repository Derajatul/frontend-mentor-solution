const Card = (props) => {
  return (
    <div className='card'>
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-sub-title'>{props.subTitle}</p>
      <img src={props.img} />
    </div>
  );
};
export default Card;
