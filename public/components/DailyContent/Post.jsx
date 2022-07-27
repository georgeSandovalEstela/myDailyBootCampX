import React from "react";
import ImagesContainer from "./ImagesContainer";

function Post({ post }) {
  return (
    <div className="public">
      <div className="public-header">
        <div className="public-date">
          <div className="date-conte">
            <a className="link-public" href="#" target="_blank">
              <img
                className="date-img"
                src={post.author.profile_url}
                width="50px"
                height="50px"
                alt="Foto de perfil del usuario"
              />
            </a>
            <div className="date-text">
              <a
                className="link-public"
                href="https://twitter.com/yummta?lang=es"
                target="_blank"
              >
                <h3>{post.author.full_name}</h3>
              </a>
              <p>{new Date(post.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <div className="buttons-actions">
          <button className="public-button">
            <svg
              width="19"
              height="5"
              viewBox="0 0 19 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <ellipse
                  cx="2.5"
                  cy="2.90721"
                  rx="2"
                  ry="2.08247"
                  fill="#788292"
                />
                <ellipse
                  cx="9.5"
                  cy="2.90721"
                  rx="2"
                  ry="2.08247"
                  fill="#788292"
                />
                <ellipse
                  cx="16.5"
                  cy="2.90721"
                  rx="2"
                  ry="2.08247"
                  fill="#788292"
                />
              </g>
            </svg>
          </button>
          <button className="button-delete visibility-hidden">
            <img src="assets/icons/delete.svg" width="10.67px" height="12px" />
            Delete
          </button>
        </div>
      </div>
      <div className="text">
        <p>{post.description}</p>
      </div>
      {post.images.length > 0 ? (
        <ImagesContainer key={post.id} images={post.images} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
