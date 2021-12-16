import React from "react";

import "./home.css";

import Sidebar from "../../components/sidebar/Sidebar";
import UserData from "../../components/userData/UserData";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <Sidebar />
          <UserData />
        </div>
      </div>
    </>
  );
};

export default Home;
