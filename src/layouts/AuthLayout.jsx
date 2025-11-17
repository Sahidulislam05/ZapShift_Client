import { Outlet } from "react-router";
import Logo from "../components/logo/Logo";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="p-5">
      <div className="container mx-auto">
        <Logo></Logo>
        <div className="flex flex-col md:flex-row gap-2 items-center mt-10 bg-base-100 shadow-2xl p-10 md:p-16">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1">
            <img src={authImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
