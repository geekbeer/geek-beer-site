import React from "react"
import {Link} from "gatsby";
import Logo from "../assets/geek-beer-logotype.svg";

const Logotype = () => (
  <h1 className="logotype">
    <Link to="/">
      <img src={Logo} alt="Geek Beer - Ett tech meetup"/>
    </Link>
  </h1>
);

export default Logotype
