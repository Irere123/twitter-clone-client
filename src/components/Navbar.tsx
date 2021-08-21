import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item as={Link} name="home" to="/" />
      <Menu.Menu position="right">
        <Menu.Item as={Link} color="teal" name="login" to="/login" />
        <Menu.Item as={Link} color="teal" name="register" to="/register" />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
