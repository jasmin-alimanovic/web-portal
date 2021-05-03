import Link from "next/link";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

const SinglePost = ({ post }) => {
  let brojac = 0;
  let textFormat = [];
  let text = post?.text;

  while (brojac < 15) {
    const index = text?.indexOf(".") + 1;
    const element = text?.slice(0, index + 1);
    brojac += 1;
    if (brojac % 2 === 0) {
      textFormat.push(
        <span key={brojac}>
          {element}

          <br />
          <br />
        </span>
      );
    } else {
      textFormat?.push(element);
    }
    text = text?.slice(index, text?.length);
  }

  return (
    <>
      <div className="card">
        <SectionTitle title="Vijesti" />
        <div
          className="content"
          style={{
            paddingLeft: "0px",
            color: "#00214D !important",
            paddingRight: "0px",
          }}
        >
          <div className="media-content">
            <h2 className="title is-2">{post?.title}</h2>
            <div
              className="subtitle has-icons-left control"
              style={{ display: "flex", alignItems: "center", height: "50px" }}
            >
              <span style={{ marginBottom: "5px" }} className="material-icons ">
                date_range
              </span>
              <p>{post?.datum}. |&nbsp; Princip News</p>
            </div>
            <p>{post?.description}</p>
          </div>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={`/img/${post?.image}`} className="post-img" />
          </figure>
        </div>
        <div
          className="card-content"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            wordBreak: "break-word",
            lineHeight: "2 !important",
          }}
        >
          <p style={{ textAlign: "justify" }}>{textFormat}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
