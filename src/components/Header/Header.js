import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <div>
          <img src="assests\logo.png" alt="Reeels logo" />
        </div>

        <div style={{ fontSize: "50px", fontFamily: "cursive" }}>
          <b>Reeels</b>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          marginRight: "85px",
          fontSize: "18px",
        }}
      >
        <div style={{ marginRight: "18px" }}>
          Hello, <b> Sign In</b>
        </div>
        <div>|</div>

        {
          <Link to={"/login"}>
            <div style={{ marginLeft: "18px", color: "#ffff" }}>
              <b>Login</b>
            </div>
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
