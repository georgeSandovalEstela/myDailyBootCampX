import React from "react";

function Profile() {
  return (
    <div className="Profile-card">
      <img src="assets/me.jpg" alt="Perfil del usuario" />
      <h3>Paul Portillo</h3>
      <span>Software Enginner</span>
      <div className="buttom">
        <a
          href="https://twitter.com/yummta?lang=es"
          target="_blank"
          className="profile-c"
        >
          <b>@yummta</b>
        </a>
        <a
          href="https://www.linkedin.com/jobs/?originalSubdomain=pe"
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
