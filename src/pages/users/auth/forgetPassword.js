import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forgetpasswordstyle.scss";

import { FaBriefcase } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Ellipse1 from "../../../assets/users/images/Ellipse 1.png";
import Ellipse2 from "../../../assets/users/images/Ellipse 2.png";
import ForgetIllustration from "../../../assets/users/images/forget-password.png";
// đổi thành hình bạn muốn

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="forget-background">

      {/* BLOB */}
      <img src={Ellipse1} alt="" className="forget-blob forget-blob-orange" />
      <img src={Ellipse2} alt="" className="forget-blob forget-blob-yellow" />

      {/* CONTENT */}
      <div className="forget-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">

            {/* FORM - LEFT COLUMN */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="auth-card">

                {/* Logo */}
                <div className="d-flex align-items-center mb-4">
                  <div className="logo-icon d-flex align-items-center justify-content-center">
                    <FaBriefcase />
                  </div>
                  <span className="logo-text ms-2">JobPortal</span>
                </div>

                {/* Title */}
                <h2 className="auth-title mb-1">Forget Password</h2>

                {/* Links */}
                <p className="auth-subtitle">
                  Go back to{" "}
                  <Link to={ROUTERS.USER.SIGNIN} className="link-login">
                    Sign up
                  </Link>
                </p>

                <p className="auth-subtitle mb-4">
                  Don’t have account{" "}
                  <Link to={ROUTERS.USER.CREATEACCOUNT} className="link-login">
                    Create Account
                  </Link>
                </p>

                {/* FORM */}
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input-soft"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary w-100 auth-primary-btn mb-4"
                    onClick={() => navigate(ROUTERS.USER.RESETPASSWORD)}
                    >
                    Reset Password <span className="ms-1">→</span>
                    </button>
                </form>

                {/* Divider */}
                <div className="divider mb-4">
                  <span>Or</span>
                </div>

                {/* Social */}
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <button type="button" className="social-btn flex-fill">
                    <FaFacebookF size={18} />
                    <span>Sign up with Facebook</span>
                  </button>
                  <button type="button" className="social-btn flex-fill">
                    <FcGoogle size={20} />
                    <span>Sign up with Google</span>
                  </button>
                </div>

              </div>
            </div>

            {/* IMAGE - RIGHT COLUMN */}
            <div className="col-md-6 d-none d-md-flex justify-content-center">
             <img
                src={ForgetIllustration}
                alt="Forget"
                className="forget-password"
              /> 
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
