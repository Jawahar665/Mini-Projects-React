const UserData = [
  {
    name: "Mahendra-Singh-Dhoni",
    city: "Ranchi",
    description: "Indian Caption",
    profile: "images/Mahendra-Singh-Dhoni.jpg",
  },
  {
    name: "Virat-Kohli",
    city: "Delhi",
    description: "Indian Vice Caption",
    profile: "images/Virat.jpg",
  },
  {
    name: "Rohit-Sharma",
    city: "Mumbai",
    description: "Indian-Opener",
    profile: "images/Rohit.png",
  },
 
];
export const User = (props) => {
  return (
    <div className="card-container">
        <img src={props.profile} alt="Msd-Photo" />
        <h5 className="active"> Online</h5>
        <h3>{props.name}</h3>
        <h4>{props.city}</h4>
        <p>{props.description}</p>
        <div>
          <button>Messages</button>
          <button>Following</button>
        </div>
      </div>
    
  );
};

export const Usercard = () => {
  return (
    <div >
      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          profile={user.profile}
        />
      ))}
    </div>
  );
};
