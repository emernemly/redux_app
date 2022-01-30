import React from "react";
import ListTask from "../components/LIstTask/ListTask";
import AddTask from "../components/AddTask/AddTask";
const Home = () => {
  return (
    <div>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default Home;
