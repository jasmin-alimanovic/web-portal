import Link from "next/link";
import React, { useEffect } from "react";

const Pagination = ({ posts, currentPage, paginate, postsPerPage }) => {
  const numbers = [];
  let totalNumbers = Math.ceil(posts?.length / postsPerPage);
  for (let i = 1; i <= totalNumbers; i++) {
    numbers.push(i);
  }
  return (
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
      style={{
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <a
        className="pagination-previous"
        onClick={() => {
          paginate(currentPage == 1 ? currentPage : currentPage - 1);
        }}
      >
        Prethodna
      </a>
      <a
        className="pagination-next"
        onClick={() => {
          paginate(currentPage == totalNumbers ? currentPage : currentPage + 1);
        }}
      >
        Sljedeća
      </a>
      <ul className="pagination-list">
        {numbers.map((number) => (
          <li key={number}>
            <Link href="#">
              <a
                onClick={() => {
                  paginate(number);
                }}
                aria-label={"Go to page " + number}
                aria-current={currentPage === number && "page"}
                className={`pagination-link ${
                  number === currentPage && "is-current"
                }`}
              >
                {number}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
