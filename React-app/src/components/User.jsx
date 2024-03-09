const User = ({ user }) => {
  const { name, email } = user;
  const teamStyle = {
    border: "2px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={teamStyle}>
      <h4>Name: {name}</h4>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default User;
