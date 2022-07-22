import React from "react";

function Story() {
  return (
    <a className="link-stories" href="#">
      <li className="frame-storie">
        <div className="img-storie1 img-storie">
          <img
            className="profile-photo"
            src="/src/assets/stories/profile 1.jpg"
            alt="foto de perfil de un usuario"
          />
          <h3 className="profile-name">Kierra Gentry</h3>
        </div>
        <div className="storie-borde"></div>
      </li>
    </a>
  );
}

export default Story;
