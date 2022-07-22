import React from "react";

function FollowUser() {
  return (
    <div className="follow-date">
      <div className="info">
        <a
          className="link-follow"
          href="https://twitter.com/condef5"
          target="_blank"
        >
          <img
            src="/src/assets/instructors/condef5.jpeg"
            alt="foto de perfil de un usuario"
            className="instructor-profile"
          />
          <p>@condef5</p>
          <img src="/src/assets/icons/twitter-check.svg" alt="check" />
        </a>
      </div>
      <button className="follow-1">
        <b>Follow</b>
      </button>
    </div>
  );
}

export default FollowUser;
