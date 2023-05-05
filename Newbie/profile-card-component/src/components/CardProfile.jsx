/* eslint-disable react/prop-types */
const CardProfile = () => {
  const DATA = [
    {
      profileNumber: 80 + 'K',
      profileType: 'Followers',
    },
    {
      profileNumber: 80.3 + 'K',
      profileType: 'Likes',
    },
    {
      profileNumber: 1.4 + 'K',
      profileType: 'Photos',
    },
  ];
  return (
    <div className='card-profile'>
      <img
        src='./bg-pattern-card.svg'
        alt='pattern card'
        className='pattern-card'
      />
      <img
        src='./image-victor.jpg'
        alt='image victor'
        className='image-victor'
      />
      <div className='bio'>
        <h2 className='name'>Victor Crest</h2>
        <h2 className='age'>26</h2>
      </div>
      <p className='city'>London</p>

      <hr />
      <div className='profiles'>
        {DATA.map((n, index) => (
          <Profile
            key={index + 1}
            profileNumber={n.profileNumber}
            profileType={n.profileType}
          />
        ))}
      </div>
    </div>
  );
};

const Profile = (props) => {
  return (
    <div className="profile">
      <h3 className="profile-number">{props.profileNumber}</h3>
      <p className="profile-type">{props.profileType}</p>
    </div>
  );
};

export default CardProfile;
