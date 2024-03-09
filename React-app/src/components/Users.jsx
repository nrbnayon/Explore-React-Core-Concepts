import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const teamStyle = {
    border: "2px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={teamStyle}>
      <h3>Users: {users.length}</h3>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

export default Users;

/**
 * 1. declare a useState to hold the data
 * 2. useEffect with call back and dependency array
 * 3. data load fetch async/await
 */
