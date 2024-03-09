import { useState } from "react";

const teamStyle = {
  border: "2px solid purple",
  margin: "20px",
  padding: "20px",
  borderRadius: "20px",
};

const Team = () => {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    // const newTeam = team - 1;
    setTeam(team - 1);
  };

  return (
    <div style={teamStyle}>
      <h3>Team: {team}</h3>
      <button onClick={handleAdd}>Add New Player</button>
      <button onClick={handleRemove}>Remove player</button>
    </div>
  );
};

export default Team;
