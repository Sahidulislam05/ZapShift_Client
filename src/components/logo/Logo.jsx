import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img src={logo} alt="Error" />
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold -ms-2.5">
          ZapShift
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
