import React, { useEffect, useState } from "react";
import { getUserApp } from "../../Storage/Storage";

function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setCurrentUser(getUserApp());
  }, []);
  return (
    <div className="Profile-card">
      <img
        src={currentUser.profile_url}
        alt="Perfil del usuario"
        width="60rem"
        height="60rem"
      />
      <h3>{currentUser.full_name}</h3>
      <span>{currentUser.title}</span>
      <div className="buttom">
        <a href={currentUser.twitter_url} target="_blank" className="profile-c">
          <b>Twitter</b>
        </a>
        <a
          href={currentUser.linkedin_url}
          target="_blank"
          className="profile-c"
        >
          <b>LinkedIn</b>
        </a>
      </div>
    </div>
  );
}

export default Profile;
