import React from "react";
import { useState } from "react";

const Pagination = ({ filteredData, setFilteredDataPage }) => {
  const [currentIndex, setCurrentIndex] = useState();

  const handleBtnClick = (id) => {
    setCurrentIndex(id);
    const startIndex = id * 8;
    const endIndex = startIndex + 8;
    setFilteredDataPage(filteredData.slice(startIndex, endIndex));
  };

  return (
    <>
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item disabled"
              onClick={() =>
                currentIndex > 0 && handleBtnClick(currentIndex - 1)
              }
            >
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {filteredData &&
              new Array(Math.ceil(filteredData.length / 8))
                .fill(null)
                .map((item, index) => (
                  <li class="page-item" onClick={() => handleBtnClick(index)}>
                    <a
                      class={
                        index === currentIndex
                          ? "page-link active"
                          : "page-link"
                      }
                      href="#"
                    >
                      {" "}
                      {index + 1}
                    </a>
                  </li>
                ))}
            <li
              class="page-item"
              onClick={() => handleBtnClick(currentIndex + 1)}
            >
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        <div style={{ display: "flex", gap: 2 }}></div>
      </div>
    </>
  );
};

export default Pagination;
