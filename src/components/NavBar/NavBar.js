import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <Container>
        <NavMenu />
      </Container>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default NavBar;
