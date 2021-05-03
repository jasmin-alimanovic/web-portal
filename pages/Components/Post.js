import Link from "next/link";
import React from "react";
import Image from "next/image";

const Post = ({ post, isFlex, hasDescription }) => {
  return (
    <Link
      href={`/vijesti/${post?.lokacija?.toLowerCase().replace(" ", "-")}/${
        post?.id
      }`}
    >
      <a
        className="card"
        style={{
          display: isFlex ? "flex" : "block",
          marginBottom: isFlex && "1rem",
          marginTop: isFlex && "1rem",
        }}
      >
        <div className="card-image">
          <figure className="image">
            <Image
              width={300}
              height={200}
              layout={isFlex ? "intrinsic" : "responsive"}
              src={`/img/${post?.image}`}
            />
          </figure>
        </div>
        <div style={{ maxWidth: isFlex && "70%" }}>
          <div
            className="card-content"
            style={{
              paddingLeft: isFlex ? "1rem" : "0px",
              paddingTop: isFlex && "0",
            }}
          >
            <div className="media-content">
              {!post?.istop ? (
                <h5 className="title is-4">{post?.title}</h5>
              ) : (
                <h4 className="title is-3">{post?.title}</h4>
              )}
            </div>
          </div>
          {(post?.description !== "" && post?.istop) ||
          isFlex ||
          hasDescription ? (
            <div
              className="content"
              style={{
                paddingLeft: isFlex && "1rem",
                paddingTop: isFlex && "0",
              }}
            >
              <p>{post?.description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </a>
    </Link>
  );
};

export default Post;
