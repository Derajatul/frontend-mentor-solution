const Card = (props) => {
  return (
    <div className='card' style={{borderTop: `4px solid ${props.border}`}}>
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-sub-title thin'>{props.subTitle}</p>
      <img src={props.img} />
    </div>
  );
};
export default Card;
