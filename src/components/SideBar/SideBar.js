import React, { useContext } from "react";
import MyContext from "../../context";

const SideBar = () => {
  const { filterMovies, setFilterMovies } = useContext(MyContext);

  const onHandleClick = (event) => {
    setFilterMovies(event.target.textContent);
  };

  // useEffect(()=>{
  //   console.log(filterMovies);

  // },[filterMovies])

  return (
    <div className="leftsidebar">
      <div>
        <b>All Movies</b>
        <br></br>
      </div>
      <div>
        <b>Genres</b>
        <div className="side-list">
          <ul>
            <li onClick={onHandleClick}>Action</li>
            <li onClick={onHandleClick}>Adventure</li>
            <li onClick={onHandleClick}>Comedy</li>
            <li onClick={onHandleClick}>Documentary</li>
            <li onClick={onHandleClick}>Fantasy</li>
            <li onClick={onHandleClick}>Drama</li>
            <li onClick={onHandleClick}>Horror</li>
            <li onClick={onHandleClick}>Crime</li>
            <li onClick={onHandleClick}>Sport</li>
            <li onClick={onHandleClick}>Romance</li>
            <li onClick={onHandleClick}>Kids & families</li>
            <li onClick={onHandleClick}>Science-fiction</li>
          </ul>
          <b>Review</b>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> & up
          </div>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star" style={{ color: "black" }}></i> & up
          </div>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star" style={{ color: "black" }}></i>
            <i class="fas fa-star" style={{ color: "black" }}></i> & up
          </div>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star" style={{ color: "black" }}></i>
            <i class="fas fa-star" style={{ color: "black" }}></i>
            <i class="fas fa-star" style={{ color: "black" }}></i> & up
          </div>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star" style={{ color: "black" }}></i>
            <i class="fas fa-star" style={{ color: "black" }}></i>
            <i class="fas fa-star" style={{ color: "black" }}></i>
            <i class="fas fa-star" style={{ color: "black" }}></i> & up
          </div>
        </div>

        <div>
          <div>
            <br></br>
            <br></br>
            <span>
              <input
                style={{ width: "50px", borderRadius: "5px" }}
                type="text"
                placeholder="From"
              />
            </span>
            <span style={{ margin: "6px" }}>
              <input
                style={{ width: "50px", borderRadius: "5px" }}
                type="text"
                placeholder="To"
              />
            </span>

            <button style={{ borderRadius: "5px" }}>Go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
